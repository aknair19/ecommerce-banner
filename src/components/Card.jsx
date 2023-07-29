import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col gap-4 w-[200px]  h-62  shadow-2xl shadow-gray-600/60 items-center rounded-md">
      <div className="h-1/6">
        <p className="text-sm font-bold">Man T-Shirt</p>
        <p className="text-xs text-center">
          <span className="text-red-600 font-semibold">Price</span> $30
        </p>
      </div>
      <div className="w-full h-5/6 p-4">
        <img
          className="w-full h-full bg-contain"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Card;
