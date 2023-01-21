import logo from "./logo.svg";
import { useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  const [res, setResult] = useState("");

  const encodedParams = new URLSearchParams();
  encodedParams.append("url", url);

  const shortenUrl = () => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "34ca990222msh5e51d9541d739c5p1e261ejsn6a5cec2b7797",
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
      <h1 className=" text-3xl font-semibold">Enter url to shorten</h1>
      <div className="my-6 flex flex-col items-start justify-center ">
        <div className=" flex justify-around items-center">
          <input
            onChange={handleChange}
            type="text"
            id="first_name"
            className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter url"
            required
          />
          <button
            onClick={shortenUrl}
            type="button"
            className="mx-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Submit
          </button>
        </div>
        <div className=" my-5">
          <a
            className=" mx-2 text-lg font-semibold mr-auto underline"
            href={res}
            target="_blank"
            rel="norefferer"
          >
            {res}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
