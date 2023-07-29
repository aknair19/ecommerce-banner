import React from "react";

const Navlist = () => {
  return (
    <ul className="flex bg-gray-800 text-white text-xs font-semibold h-8 w-5/6 max-w-[1400px]  p-1 justify-center gap-4 rounded-bl-[50px] rounded-br-[50px]">
      <li className="hover:text-gray-300 cursor-pointer">Best Sellers</li>
      <li className="hover:text-gray-300 cursor-pointer">Gift Ideas</li>
      <li className="hover:text-gray-300 cursor-pointer">New Releases</li>
      <li className="hover:text-gray-300 cursor-pointer">Today's Deals</li>
      <li className="hover:text-gray-300 cursor-pointer">Customer Service</li>
    </ul>
  );
};

export default Navlist;
