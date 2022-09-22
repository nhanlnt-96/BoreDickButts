import React from "react";
import Banner from "../banner";
import Items from "../items";
import About from "../about";
import QA from "../q&a";
import Team from "../team";

const MainLayout = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Banner />
      <Items />
      <About />
      <QA />
      <Team />
      <div className="p-4 text-center w-full text-white bg-bdb-purple underline hover:text-blue-500">
        <a href="http://www.onemitspot.com/" target="_blank">
          Powered by OmS
        </a>
      </div>
    </div>
  );
};

export default MainLayout;
