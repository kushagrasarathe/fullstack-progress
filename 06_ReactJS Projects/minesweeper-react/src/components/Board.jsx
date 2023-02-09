import React from "react";
import createBoard from "../utils/createBoard";

export default function Board() {
  //   function createLayout(rows, columns) {
  //     let arr = [];
  //     let value = 1;

  //     for (let i = 0; i < rows; i++) {
  //       const random = Math.floor(Math.random() * 9);
  //       arr[i] = [];

  //       for (let j = 0; j < columns; j++) {
  //         arr[i][j] = value++;
  //       }
  //     }
  //     // console.table(arr);
  //     return arr;
  //   }

  //   const randomNumArray = Array(10)
  //     .fill()
  //     .map(() => Math.floor(Math.random() * 9));

  function createLayout(rows, columns, mines) {
    let arr = [];
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        arr[i][j] = 0;
      }
    }

    while (mines > 0) {
      const randomI = Math.floor(Math.random() * rows);
      const randomJ = Math.floor(Math.random() * columns);
      if (arr[randomI][randomJ] !== "x") {
        arr[randomI][randomJ] = "x";
        mines--;
      }
    }
    return arr;
  }

//   console.table(createLayout( 10, 8, 10 ))
//   console.table(createBoard( 10, 8, 10 ))


  return (
    <div>
      {createLayout(10, 8, 10).map((item, index) => (
        <div className={`grid grid-cols-8`} key={index}>
          {item.map((el, idx) => (
            <div
              className="  border border-black bg-gray-100 py-3 cursor-pointer"
              key={idx}
            >
              {" "}
              {el}{" "}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
