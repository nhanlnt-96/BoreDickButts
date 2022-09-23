import React from "react";
import Container from "../container";
import PlusIcon from "../../assets/icon/plus.png";
import MinusIcon from "../../assets/icon/minus.png";
import { teamData } from "../../configs";
import { divideColor } from "tailwindcss/lib/plugins";

const Team = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-bdb-purple p-4">
      <Container className="w-full">
        <div className="w-full flex flex-col space-y-8 justify-center items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="bg-white max-w-sm w-full rounded border border-black"
            style={{
              boxShadow: "rgba(0, 0, 0, 1) 5px 5px",
            }}
          >
            <div className="border-b-2 border-black flex space-x-3 p-3">
              <img
                src={PlusIcon}
                alt="Cancel icon"
                className="w-4 h-4"
                style={{ transform: "rotate(45deg)" }}
              />
              <img src={PlusIcon} alt="Plus icon" className="w-4 h-4" />
              <img src={MinusIcon} alt="Minus icon" className="w-4 h-4" />
            </div>
            <div className="px-2 py-10 text-center">
              <h6 className="font-bold text-3xl sm:text-4xl text-black">
                Team
              </h6>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {teamData.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                key={index}
                className="w-full lg:w-1/4 px-2 py-10 border-2 border-black rounded-md bg-white text-center"
                style={{
                  boxShadow: "rgba(0, 0, 0, 1) 5px 5px",
                }}
              >
                <p className="font-medium text-xl sm:text-2xl text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
