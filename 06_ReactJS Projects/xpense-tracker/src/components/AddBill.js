import React, { useState } from "react";

export default function AddBill(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [items, setItems] = useState();

  const saveDetails = () => {
    // const newLi = document.createElement("li");

    // if (title.value !== "" && amount.value !== "") {
    //   newLi.textContent = title.value;
    //   // newLi.textContent = amount.value;
    //   document.querySelector(".expenseList").appendChild(newLi);
    // } else {
    //   alert("Please enter a details above");
    // }

    console.log(`name is ${title} and amount is ${amount}`);
    alert(`Details are ${title} & ${amount}`);
  };

  const handleOnChangeTitle = (event) => {
    localStorage.setItem("expTitle", title);

    console.log(`Title Saved ${title}`);
    setTitle(event.target.value);
  };

  const handleOnChangeAmount = (event) => {
    localStorage.setItem("expAmount", amount);
    console.log(`Amount Saved ${amount}`);
    setAmount(event.target.value);
  };

  return (
    <>
      <div className="card m-5 text-center text-white bg-dark">
        <h5 className="card-header border border-3 border-secondary">
          {props.title}
        </h5>
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
                <button onClick={saveDetails} className="btn btn-primary">
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card m-5 text-center text-white bg-dark">
        <h5 className="card-header border border-3 border-secondary">
          Your Expenses
        </h5>
        <div className="card-body border border-3 border-secondary">
          <div className="d-flex justify-content-center row align-items-center h-100 card-deck">
            <ol className="list-group m-4 w-75  ">
              <li className="list-group-item m-2 expenseList">
                {props.expense}
                <span className=" text-black">
                  ${props.cost}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
