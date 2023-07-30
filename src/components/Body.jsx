import React from "react";
import Card from "./Card";
import CardList from "./CardList";
import { useSelector } from "react-redux";

const Body = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h1 className="font-bold text-xl mt-2">Men & Women Fashion</h1>
      <CardList />
    </div>
  );
};

export default Body;
