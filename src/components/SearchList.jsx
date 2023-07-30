import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch, BsFillCartDashFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
const SearchList = () => {
  return (
    <div className="flex w-5/6 max-w-[1400px] justify-between items-center gap-4 outline-none">
      <GiHamburgerMenu className="text-white text-3xl  cursor-pointer " />
      <select className="bg-black text-white text-xs p-1 w-26">
        <option value="All Category">All Category</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
      </select>

      <div className="flex-1 flex justify-center max-w-[900px] ">
        <input
          type="text"
          className=" w-3/4  placeholder:text-xs  
          p-[4px] placeholder:px-2 rounded-tl rounded-bl"
          placeholder="Search for products"
        />
        <button className="bg-orange-400 p-1 px-3 rounded-tr rounded-br">
          <BsSearch className="text-white font-bold" />
        </button>
      </div>

      <select className=" text-xs p-1 w-20">
        <option value="All Category">English</option>
        <option value="Clothes">German</option>
        <option value="Electronics">Espanyol</option>
        <option value="Furniture">French</option>
      </select>
      <div className="text-white flex gap-4 items-center text-sm">
        <div className="flex items-center gap-1 font-semibold">
          <BsFillCartDashFill />
          <p>CART</p>
        </div>
        <div className="flex items-center gap-1 font-semibold text-sm">
          <BiSolidUser />
          <p>USER</p>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
