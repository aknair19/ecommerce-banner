import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch, BsFillCartDashFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getSearchInput } from "../utils/slice/appSlice";
const SearchList = () => {
  const dispatch = useDispatch();
  const searchInputValue = useSelector((state) => state.app.searchInput);

  const handleInputValue = (e) => {
    dispatch(getSearchInput(e.target.value));
  };

  return (
    <div className="flex w-5/6 max-w-[1400px] justify-between items-center gap-4 outline-none">
      <GiHamburgerMenu className="text-white text-3xl  cursor-pointer " />
      <select className="bg-black text-white rounded-sm text-xs p-1 w-26">
        <option value="All Category">All Category</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
      </select>

      <div className="flex-1 flex justify-center max-w-[900px] ">
        <input
          type="text"
          className=" w-3/4 text-sm placeholder:text-sm   
          p-[4px] placeholder:px-2 rounded-tl rounded-bl "
          placeholder="search for products"
          value={searchInputValue}
          onChange={handleInputValue}
        />
        <button className="bg-orange-400 p-1 px-3 rounded-tr rounded-br">
          <BsSearch className="text-white font-bold" />
        </button>
      </div>

      <select className=" text-xs p-1 w-20 rounded-sm">
        <option value="All Category">English</option>
        <option value="Clothes">German</option>
        <option value="Electronics">Espanyol</option>
        <option value="Furniture">French</option>
      </select>
      <div className="text-white flex gap-4 items-center text-sm">
        <div className="cursor-pointer flex items-center gap-1 font-semibold hover:text-gray-200 ">
          <BsFillCartDashFill />
          <p>CART</p>
        </div>
        <div className=" cursor-pointer flex items-center gap-1 font-semibold text-sm hover:text-gray-200">
          <BiSolidUser />
          <p>USER</p>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
