import logo from "./logo.svg";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [res, setResult] = useState("");

  const [copied, setIsCopied] = useState(false);

  const encodedParams = new URLSearchParams();
  encodedParams.append("url", url);

  const shortenUrl = () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      body: encodedParams,
    };

    fetch(`https://url-shortener-service.p.rapidapi.com/shorten`, options)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.result_url);
      })
      .catch((err) => console.error(err));
  };

  function handleChange(e) {
    setUrl(e.target.value);
  }

  return (
    <div className="flex py-10 justify-center items-center flex-col">
      <h1 className=" mt-2 text-3xl font-semibold">Enter url to shorten</h1>
      <div className=" w-full my-10 flex flex-col items-start justify-center">
        <div className=" mx-auto md:w-5/12 flex justify-around items-center ">
          <input
            onChange={handleChange}
            type="text"
            id="first_name"
            className=" w-11/12 mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter url"
            required
          />
          <button
            onClick={shortenUrl}
            type="button"
            className="mx-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Submit
          </button>
        </div>
        <div className=" mt-4  md:w-5/12 mx-auto flex justify-between items-center ">
          {res ? (
            <div className="flex items-center justify-between w-full my-5">
              <a
                className=" mx-2 text-lg font-semibold mr-auto underline"
                href={res}
                target="_blank"
                rel="norefferer"
              >
                {res}
              </a>
              <button
                className=" mx-2 flex justify-center items-start px-1  py-1 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded-sm shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  setIsCopied(true);
                  setTimeout(() => {
                    setIsCopied(false);
                  }, 1500);
                  navigator.clipboard.writeText(res);
                }}
              >
                {copied ? (
                  <span className=" text-sm font-semibold">Copied!</span>
                ) : (
                  <img src="https://img.icons8.com/fluency-systems-regular/22/000000/clone-figure--v3.png"></img>
                )}
              </button>
            </div>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
