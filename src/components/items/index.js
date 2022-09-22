import React, { useRef, useMemo, useState, useEffect } from "react";
import Container from "../container";
import Item1 from "../../assets/items/item-1.png";
import { height } from "tailwindcss/lib/plugins";

const Items = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-bdb-red">
      <Container className="grid grid-cols-1 py-3 sm:py-0 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative">
        <div className="w-full bg-white rounded-md p-3 mt-20">
          <div className="w-full h-20 relative">
            <div className="w-full h-40 absolute bottom-0">
              <img
                src={Item1}
                alt="Utility"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <h6 className="text-lg text-gray-500 font-medium">Utility</h6>
            <p className="text-bdb-red text-base">
              BDB is the Official Collection from GiIGSH MArketplace .
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-md p-3 mt-20">
          <div className="w-full h-20 relative">
            <div className="w-full h-40 absolute bottom-0">
              <img
                src={Item1}
                alt="Utility"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <h6 className="text-lg text-gray-500 font-medium">Airdrop</h6>
            <p className="text-bdb-red text-base">
              Once mint is done all holders will receive a giigsh airdrop to
              their eth wallet.
            </p>
          </div>
        </div>
        <div className="w-full bg-white rounded-md p-3 mt-20">
          <div className="w-full h-20 relative">
            <div className="w-full h-40 absolute bottom-0">
              <img
                src={Item1}
                alt="Utility"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <h6 className="text-lg text-gray-500 font-medium">Staking</h6>
            <p className="text-bdb-red text-base">
              Raise Funds to operate the first Multi blockchain Crypto Friendly
              digital services.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Items;
