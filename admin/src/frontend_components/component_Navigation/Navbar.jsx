import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-amber-50 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flext items-center font-[Poppins] text-gray-800 ">
          <span className="text-3xl text-indigo-600 mr-1 pt-2 font-mono ">
            Stallventory
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-inherit md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            Home
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            Add Product
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            Sales
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
