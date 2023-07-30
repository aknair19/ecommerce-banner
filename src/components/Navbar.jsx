import React from "react";
import Navlist from "./Navlist";
import SearchList from "./SearchList";
import HeroSection from "./HeroSection";

const Navbar = () => {
  return (
    <nav className="w-full bg-yellow-400 h-[500px]  flex flex-col items-center gap-4">
      <Navlist />
      <h2 className="text-2xl font-bold text-white">Eflyer</h2>
      <SearchList />
      <HeroSection />
    </nav>
  );
};

export default Navbar;
