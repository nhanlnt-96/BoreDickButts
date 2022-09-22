import React from "react";
import Banner from "../banner";
import Items from "../items";

const MainLayout = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Banner />
      <Items />
    </div>
  );
};

export default MainLayout;
