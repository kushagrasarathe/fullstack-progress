import "./App.css";
import { db } from "./firebase-config";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateAge = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc, id);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className=" mt-10  w-full">
      <h1 className=" text-center mb-3 text-3xl font-semibold"> Firebase Crud Practice</h1>
      <div className=" flex flex-col items-center justify-center">
        <input
          className="my-2 shadow appearance-none border rounded w-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          className="my-2 shadow appearance-none border rounded w-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Enter Age"
          onChange={(e) => {
            setNewAge(e.target.value);
          }}
        />
        <button
          className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={createUser}
        >
          Create User
        </button>
      </div>
      <h1 className=" text-center text-3xl mt-10 font-semibold"> Users </h1>
      <div className=" flex justify-around flex-wrap items-center my-5">
        {users.map((user, key) => {
          return (
            <div className=" bg-slate-900 px-6 py-4 rounded-md my-2 flex flex-col justify-center items-start" key={key}>
              <span className=" text-lg font-semibold text-cyan-300">Name: <span className="text-gray-200  font-bold text-xl leading-8 tracking-wide">{user.name}</span></span>
              <span className=" text-lg font-semibold text-cyan-300">Age: <span className=" text-gray-200 font-bold text-xl leading-8 tracking-wide">{user.age}</span></span>
              <div className=" mt-4 ">
              <button
                className="focus:outline-none mr-3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={() => {
                  updateAge(user.id, user.age);
                }}
              >
                Increase Age
              </button>
              <button
                className="focus:outline-none ml-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
