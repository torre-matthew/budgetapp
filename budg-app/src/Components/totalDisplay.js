import React from "react";


function Total (props) {
        return (
            <div className="row">
                <div className="col s12 m5">
                    <div className="card-panel teal">
                        <p> {props.total} </p>
                    </div>
                </div>
            </div>
        );
    }

export default Total;