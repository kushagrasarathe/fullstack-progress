import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Options {
  id: string;
  option: string
}

export default function Question({ question, options, answer, }: Question) {
  const [option, setOption] = useState<Options[]>([]);
  const [selected, setSelected] = useState<boolean>(true)
  // const [newOptions, setNewOptions] = useState<Options[]>([])


  useEffect(() => {
    temp();
  }, []);

  function temp() {
    let arr: string[] = [];
    options.map((el) => {
      arr.push(
        el
        // {
        // option: el,
        // id: nanoid()
        // }
      );
    });

    let rand: number = Math.floor(Math.random() * 4);
    arr.splice(rand, 0, answer);

    // console.log(arr)
    const arrWId: Options[] = []
    arr.map(option => arrWId.push({
      id: nanoid(),
      option: option
    }))

    // console.log(arrWId)
    setOption(arrWId);
  }

  //   let arr: Options[] = [];
  //   options.map((el) => {
  //     arr.push(el);
  //   });

  //   let rand: number = Math.floor(Math.random() * 4);
  //   arr.splice(rand, 0, answer);
  //   // console.log(arr)
  //   setOption(arr);
  // }

  // function id() {
  //   let arr: Options[] = []
  //   option.map((el) => {
  //     let obj: Options = {
  //       id: nanoid(),
  //       option: el
  //     }
  //     arr.push(obj)
  //   })
  //   return arr;
  // }


  // console.log(id())


  // console.log(answer);

  return (
    <div className=" mt-4 py-4 md:px-20 flex justify-center flex-col items-start">
      <span className=" text-md text-start font-semibold">{question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</span>
      <div className=" w-full  my-2 flex justify-between items-center flex-wrap ">
        {option.map((option) => (
          <div onClick={() => setSelected(prevState => !prevState)} className={`${selected ? ' bg-[#D6DBF5]' : 'bg-white'} cursor-pointer w-72 m-3 px-3 py-2 border border-gray-600 rounded-md`} key={option.id}>
            <span className=" text-sm font-semibold">{option.option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
