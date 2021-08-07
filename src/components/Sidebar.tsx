import React from "react";
import { Link } from "react-router-dom";
import { home, wishlist } from "../assets/icons";

const Sidebar = () => {
  return (
    <div className="w-1/6 fixed h-screen shadow-xl bg-bgColor bg-opacity-50">
      <div className="px-8 py-5">
        <div>
          <h1 className="text-3xl font-bold text-buttonPink">ZaifliX</h1>
        </div>
        <ul className="my-10">
          <li className="my-5">
            <Link
              className={
                "flex flex-row md:text-lg text-sm font-medium items-center  " +
                (window.location.href.indexOf("/movie") !== -1
                  ? "text-white"
                  : "text-gray-600 hover:text-white")
              }
              to={{
                pathname: "/movie",
                search: "s",
              }}
            >
              <img
                src={home}
                className="md:w-6 w-4 md:h-6 h-4 md:mr-5 mr-4"
                alt="home-svg"
              />
              Home
            </Link>
          </li>

          <li className="my-5">
            <Link
              className={
                "flex flex-row md:text-lg text-sm font-medium items-center  " +
                (window.location.href.indexOf("/whislist") !== -1
                  ? "text-white"
                  : "text-gray-400 hover:text-white")
              }
              to={{
                pathname: "/whislist",
              }}
            >
              <img
                src={wishlist}
                className="md:w-7 w-4 md:h-7 h-4 md:mr-5 mr-4"
                alt="whislist-svg"
              />
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
