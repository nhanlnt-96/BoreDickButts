import React from "react";
import Container from "../container";
import { itemsData } from "../../configs";

const Items = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-bdb-red">
      <Container className="grid grid-cols-1 py-3 sm:py-0 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative">
        {itemsData.map((item, index) => (
          <div key={index} className="w-full bg-white rounded-md p-3 mt-20">
            <div className="w-full h-20 relative">
              <div className="w-full h-40 absolute bottom-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h6 className="text-lg text-gray-500 font-medium">
                {item.title}
              </h6>
              <p className="text-bdb-red text-base">{item.detail}</p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Items;
