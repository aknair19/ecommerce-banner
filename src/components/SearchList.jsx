import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch, BsFillCartDashFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getSearchInput } from "../utils/slice/appSlice";
import axios from "axios";
import { getCategoryNames } from "../constants";
const SearchList = () => {
  const [categories, setCategories] = useState([]);
  const itemsInCart = useSelector((store) => store.app.itemsInCart);
  const dispatch = useDispatch();
  const searchInputValue = useSelector((state) => state.app.searchInput);

  const handleInputValue = (e) => {
    dispatch(getSearchInput(e.target.value));
  };
  const getCategoryList = async () => {
    const { data } = await axios.get(getCategoryNames);
    setCategories(["all category", ...data]);
  };

  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategorySelected = (e) => {
    dispatch(getCategory(e.target.value));
  };
  return (
    <div className="flex flex-col md:flex-row  w-5/6 max-w-[1400px] justify-between items-center gap-4 outline-none">
      <GiHamburgerMenu className="text-white text-3xl  cursor-pointer hidden md:block" />
      <select
        className="bg-black text-white rounded-sm text-xs p-1 w-34"
        onChange={getCategorySelected}
      >
        {categories.map((category, i) => (
          <option value={category} key={i}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>

      <div className="flex-1 flex justify-center  w-full  md:max-w-[900px] ">
        <input
          type="text"
          className="  w-full md:w-3/4 text-sm placeholder:text-sm   
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
        <option>English</option>
        <option>German</option>
        <option>Espanyol</option>
        <option>French</option>
      </select>
      <div className="text-white flex gap-4 items-center text-sm">
        <div className="  cursor-pointer flex items-center gap-1 font-semibold hover:text-gray-200 relative ">
        <p className="">CART</p>
          <BsFillCartDashFill />
          
          <div className="text-xs text-red-400 font-bold absolute left-12 top-[-10px]">
            {itemsInCart.length}
          </div>
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
