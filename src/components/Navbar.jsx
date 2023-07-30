import React from "react";
import Navlist from "./Navlist";
import SearchList from "./SearchList";
import HeroSection from "./HeroSection";

const Navbar = () => {
  return (
    <nav className="w-full md:bg-hero-image bg-yellow-500 bg-no-repeat bg-cover     h-[550px] md:h-[500px]  flex flex-col items-center gap-4 rounded-bl-[50px] rounded-br-[50px]">
      <Navlist />
      <a href="/" className="text-2xl font-bold text-white cursor-pointer">
        Eflyer
      </a>
      <SearchList />
      <HeroSection />
    </nav>
  );
};

export default Navbar;
