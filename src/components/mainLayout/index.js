import React from "react";
import Banner from "../banner";
import Items from "../items";
import About from "../about";

const MainLayout = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Banner />
      <Items />
      <About />
    </div>
  );
};

export default MainLayout;
