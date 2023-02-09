import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Board() {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    function newLayout() {
      const newBoard = createLayout(10, 8, 40);
      setLayout(newBoard);
    }
    newLayout();
  }, []);

  function setAdjacentMinesCount(arr, row, col) {
    let minI = Math.max(row - 1, 0);
    let minJ = Math.max(col - 1, 0);

    let maxI = Math.min(row + 1, arr.length -1 );
    let maxJ = Math.min(col + 1, arr[0].length - 1);

    let minesCount = 0;


    // console.log("row " + row, minI, maxI, " col " + col, minJ,  maxJ)

    for (let i = minI; i <= maxI; i++) {
      for (let j = minJ; j <= maxJ; j++) {
        // console.log( i, j, row, col)
        if (i !== row || j !== col) {
          console.log(i, j)  
          if (arr[i][j] === "x") {
            minesCount++;
            // console.log( minesCount)
          }
        }
      }
    }
    return minesCount;
  }

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

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (arr[i][j] !== "x") {
          arr[i][j] = setAdjacentMinesCount(arr, i, j);
          // console.log(i, j, arr[i][j])
        } 
      }
    }

    return arr;
  }

  return (
    <div>
      {layout.map((item, index) => (
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
