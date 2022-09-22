import React from "react";
import Container from "../container";
import BgImage from "../../assets/about/about-image.png";
import { aboutData } from "../../configs";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-bdb-red-variant flex justify-center items-center p-4">
      <Container className="h-full flex flex-col space-y-8 lg:space-y-0 lg:space-x-2 lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 space-y-8 flex flex-col justify-center items-center">
          <h6 className="font-bold text-3xl sm:text-5xl">What Is giigsh?</h6>
          <div className="w-full relative flex justify-center items-center">
            <div className="text-white w-40 md:w-80 xl:w-96 h-auto">
              <svg viewBox="0 0 500 444.61" fill="currentColor">
                <path d="M494.2,243.94L390.84,422.97c-7.73,13.39-22.01,21.63-37.47,21.63H146.63c-15.46,0-29.74-8.25-37.47-21.63L5.8,243.94  c-7.73-13.39-7.73-29.88,0-43.27L109.16,21.63C116.89,8.25,131.18,0,146.63,0h206.73c15.46,0,29.74,8.25,37.47,21.63L494.2,200.67  C501.93,214.06,501.93,230.55,494.2,243.94z"></path>
              </svg>
            </div>
            <div
              className="w-32 md:w-64 absolute left-1/2 top-1/2"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <img
                src={BgImage}
                alt="What Is giigsh?"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-3 sm:space-y-6">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="shadow-bdb-shadow rounded-md bg-bdb-purple py-3 px-6 space-y-2"
            >
              <h6 className="text-lg text-bdb-yellow-dark">{item.title}</h6>
              <p className="text-base">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
