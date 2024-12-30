import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const menu = [
  {
    id: 1,
    name: "Array",
    link: "/Array",
  },
  {
    id: 2,
    name: "Stack",
    link: "/Stack",
  },
  {
    id: 3,
    name: "LinkedList",
    link: "/LinkedList",
  },
  {
    id: 4,
    name: "BinaryTree",
    link: "/BinaryTree",
  },
  {
    id: 5,
    name: "Queue",
    link: "/Queue",
  },
  {
    id: 6,
    name: "CircularQueue",
    link: "/CircularQueue",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white  dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper-navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="/"
              className="font-bold text-2xl sm:text-3xl flex gap-2 relative top-1"
            >
              <img
                src="/file.png"
                alt="Logo"
                className="w-11 uppercase relative left-1 bottom-2"
              />
              DSify
            </a>
          </div>
          {/* Search bar section */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="search"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus: outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
          {/* <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group ">
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm " />
          </button> */}
        </div>
      </div>
      {/* lower-navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
