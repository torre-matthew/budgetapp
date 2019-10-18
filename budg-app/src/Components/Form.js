import React from "react";


function Form (props) {
    return (
        <div className="row">
            <form className="col s12">
            <div className="row">
                <div className="input-field col s4">
                <input placeholder="Bill" name="bill_name" id="bill_name" type="text" className="validate" value={props.billName} onChange={props.handleInputChange} />
                </div>
                <div className="input-field col s4">
                <input placeholder="Amount" name="amount_due" id="amount_due" type="text" className="validate" value={props.amountDue} onChange={props.handleInputChange} />
                </div>
                <div className="input-field col s4">
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.handleFormSubmit}>Submit
                    <i className="material-icons right">send</i>
                </button>
                </div>
            </div>
            </form>
        </div>
    );
  }

export default Form;
