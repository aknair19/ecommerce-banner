import React from "react";

const Card = ({ product }) => {
  const { title, price, description, category, image } = product;
  return (
    <div className="flex flex-col gap-4 w-[210px]  h-55 shadow-2xl shadow-gray-600/60 items-center rounded-md">
      <div className="w-full h-4/6 p-4 ">
        <img className="w-full h-full p-2  " src={image} alt={image} />
      </div>
      <div className="h-1/6 px-2">
        <p className="text-sm font-bold text-clip overflow-hidden ... h-10 ">{title.toUpperCase()}</p>
        <p className="text-xs font-bold mt-1 ">
          <span className="text-red-600 font-semibold">Price</span> ${price}
        </p>
      </div>
    </div>
  );
};

export default Card;
