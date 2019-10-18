import React, { Component} from 'react';
import Form from './Components/Form';
import Bills from './Components/billDisplay';
import Total from './Components/totalDisplay';

class App extends Component {
  state = {
    amount_due: "",
    bill_name: "",
    currentBills: [],
    total: 0
  };

  componentDidMount() {
    this.getBills();
}

handleInputChange = event => {
  this.setState({
      [event.target.name]: event.target.value
  });
};

handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)

  event.preventDefault();
  
  let billData = require("../src/Data/data");
  
  billData.push({
      amount_due: this.state.amount_due,
      bill_name: this.state.bill_name 
  })
  
  let stringToStore = JSON.stringify(billData);
  
  this.setState({
      currentBills: billData
  });

  localStorage.setItem('tester', stringToStore);

  this.calculateTotal(billData);

  this.setState({
    amount_due: "",
    bill_name: "",
  });
};

getBills = () => {
  let localStorageBills = JSON.parse(localStorage.getItem("tester"));

  this.setState({
    currentBills: localStorageBills
  });

  this.calculateTotal(localStorageBills);
}

redoCurrentBills = (index) => {

  let newCurrentBills = this.state.currentBills.splice(index, 1);
  
  this.setState({
   currentBills: newCurrentBills
  });
  
  localStorage.clear();
  localStorage.setItem('tester', JSON.stringify(this.state.currentBills));

  this.getBills();
}


deleteBill = (billName) => {
  let indexToBeDeleted;

  this.state.currentBills.forEach(function(element, index) {
    if (element.bill_name === billName) {
      indexToBeDeleted = index;
    }
  });

  this.redoCurrentBills(indexToBeDeleted);
}

calculateTotal = (currentBills) => {
  let total = 0;

  currentBills.forEach(element => {
    
    total = parseInt(element.amount_due) + total;
  });
  
  this.setState({
    total: total
  });
}


  render() {
    return ( 
    <div>
      <Total
        total={this.state.total} 
      />
      <Form
        billName={this.state.bill_name}
        amountDue={this.state.amount_due} 
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
      {this.state.currentBills.map(bills => 
        <Bills
          billName={bills.bill_name} 
          billAmount={bills.amount_due}
          handleDelete={this.deleteBill}
        />
      )}
    </div>
    );
  }
}

export default App;
