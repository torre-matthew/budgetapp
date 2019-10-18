import React from "react";


function Bill (props) {
        return (
            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel teal">
                        <p> {props.billName} </p>
                        <p> {'$'+ props.billAmount} </p>
                        <i data-billname={props.billName} data-amountdue={props.billAmount} className="material-icons" onClick={() => props.handleDelete(props.billName)}>delete</i>
                    </div>
                </div>
            </div>
        );
    }

export default Bill;
