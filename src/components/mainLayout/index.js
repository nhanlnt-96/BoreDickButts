import React from "react";
import Banner from "../banner";
import Items from "../items";
import About from "../about";
import QA from "../q&a";

const MainLayout = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Banner />
      <Items />
      <About />
      <QA />
    </div>
  );
};

export default MainLayout;
