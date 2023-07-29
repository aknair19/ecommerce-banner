import React from "react";
import Card from "./Card";
import CardList from "./CardList";

const Body = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h1 className="font-bold text-xl">Man & Woman Fashion</h1>
      <CardList />
    </div>
  );
};

export default Body;
