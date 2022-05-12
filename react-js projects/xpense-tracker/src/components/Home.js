// importing useState hook from react
import React, { useState } from "react";

export default function (props) {
  // useState hook
  const [budget, setBudget] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const saveBudget = () => {
    setIsDisabled(!isDisabled)
    localStorage.setItem('monthlyBudget', budget); 
    console.log(`Button clicked ${budget }`);
  }
  
  const handleOnChange = (event) => {
    console.log(`Changes Saved ${budget }`);
    setBudget(event.target.value);
  }

  return (
    <>
      <div className="card m-5 text-center text-white bg-dark justify-content-center">
        <h5 className="card-header border border-3 border-secondary">
          {props.title}
        </h5>
        <div className="card-body border border-3 border-secondary">
          <h5 className="card-title">{props.subTitle}</h5>

          <div className="d-flex justify-content-center row align-items-center h-100 card-deck">
            <div className="card bg-light text-black m-3 w-50">
              <h5 className="card-header">{props.scTitle1}</h5>

              <div className="card-body text-center">
                <p>Here's your total budget for this month</p>${" "}
                <input
                  disabled={isDisabled}
                  type="number"
                  value={budget}
                  onChange={handleOnChange}
                  className="font-weight-bold w-50"
                />
                <div className="m-2">
                  <button onClick={saveBudget} className="btn btn-primary text-center">Edit Budget</button>
                </div>
              </div>
            </div>

            <div className="card bg-light text-black m-3 w-50">
              <h5 className="card-header">{props.scTitle2}</h5>

              <div className="card-body text-center">
                <p>Here's your remaining amount in wallet</p>
                <span className="font-weight-bold">{props.remaining}</span>
              </div>
            </div>

            <div className="card bg-light text-black m-3 w-50">
              <h5 className="card-header">{props.scTitle3}</h5>

              <div className="card-body text-center">
                <p>Here's total amount you spent this month</p>
                <span className="font-weight-bold">{props.spent}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
