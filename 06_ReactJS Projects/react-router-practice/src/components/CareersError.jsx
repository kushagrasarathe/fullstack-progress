import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function CareersError() {

  const error = useRouteError()

  return (
    <div className="min-h-[90vh] flex justify-center items-center flex-col">
      <h1 className=" text-3xl font-bold text-center"> Error... {error.message}</h1>
      <img className=" max-w-xl mt-5" src={require('../assets/minnions.png')} alt="" />
      <Link className=" mt-5 underline" to={'/'}>Take me back to home page</Link>
    </div>
  );
}
