import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header className=" w-full bg-purple-500 text-gray-100 rounded-sm py-2 px-6 mb-3">
        <nav className=" flex justify-end w-full mx-auto my-0 items-center">
          <h1 className=" font-semibold mr-auto">
            <Link to={"/"}>React-Router</Link>
          </h1>
          <NavLink className={" font-semibold px-2 rounded-sm"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={" font-semibold px-2 rounded-sm"} to={"/dashboard"}>
            Dashboard
          </NavLink>
          <NavLink className={" font-semibold px-2 rounded-sm"} to={"about"}>
            About
          </NavLink>
          <NavLink className={" font-semibold px-2 rounded-sm"} to={"help"}>
            Help
          </NavLink>
        </nav>
      </header>
      <main className=" my-6">
        <Outlet/>
      </main>
    </div>
  );
}
