import { useReducer } from "react";
import { useState } from "react";

//  action is an object which has a type key and we use that type key to mutate the state and return a new state based on the data ww get with the action
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "ADD_NAME":
      return {
        ...state,
        names: [...state.names, state.name],
        name: "",
      };
  }
};

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      firstName: "",
      lastName: "",
    }
  );

  return <div>
    <input type="text" onChange={ (e) => dispatch( { firstName: e.target.value } )} />
    <input type="text" onChange={ (e) => dispatch( { lastName: e.target.value } )} />
    <div>
      First Name is : {state.firstName}
      <br />
      Last Name is : {state.lastName}
    </div>
  </div>
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    names: [],
    name: "",
  });

  return (
    <div>
      <div>
        <h3>UserForm</h3>
        <UserForm />
      </div>

      <div>Your Name Is : {state.name}</div>
      <input
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
      />
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
      <div>
        {state.names.map((name, idx) => (
          <div key={idx}>
            {idx} : {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
