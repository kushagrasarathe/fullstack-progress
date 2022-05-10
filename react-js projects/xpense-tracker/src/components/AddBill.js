import React, { useState } from "react";

export default function AddBill(props) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const saveDetails = () => {
        console.log(`name is ${title } and amount is ${amount }`);
      }
      
      const handleOnChangeTitle = (event) => {
        console.log(`Title Saved ${title }`);
        setTitle(event.target.value);
      }

      const handleOnChangeAmount = (event) => {
        console.log(`Amount Saved ${amount }`);
        setAmount(event.target.value);
      }

  return (
      
    <>
      <div className="card m-5 text-center text-white bg-dark">
        <h5 className="card-header border border-3 border-secondary">{props.title}</h5>
        <div className="card-body border border-3 border-secondary">
          <div className="d-flex justify-content-center align-items-center h-100 card-deck">
            <form>
              <div className="form-group m-4">
                <label htmlFor="exampleInputEmail1">
                  Enter title of Expense below
                </label>
                <input
                  className="form-control m-2"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={handleOnChangeTitle}
                />
              </div>

              <div className="form-group m-4">
                <label htmlFor="exampleInputEmail1">Enter amount below</label>
                <input
                  className="form-control m-2"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={handleOnChangeAmount}
                />
              </div>

              <div className="m-2">
                  <button onClick={saveDetails} className="btn btn-primary">Add Expense</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
