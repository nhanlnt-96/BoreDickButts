import React from "react";
import Container from "../container";
import { qaData } from "../../configs";
import MessageQuestion from "../../assets/shapes/message-question.png";
import MessageAnswer from "../../assets/shapes/message-answer.png";

const QA = () => {
  return (
    <div className="w-full min-h-screen bg-bdb-purple flex justify-center items-center p-4">
      <Container className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-12 gap-x-16">
        {qaData.map((item, index) => (
          <div className="w-full space-y-4">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full relative flex justify-center items-center px-10 py-3"
              style={{ minHeight: "100px" }}
            >
              <div className="w-full absolute left-0 top-0 h-full">
                <img
                  src={MessageQuestion}
                  alt="Q&A"
                  className="w-full h-full"
                  style={{ transform: "scaleX(-1)" }}
                />
              </div>
              <p className="text-2xl sm:text-3xl text-center relative">
                {item.question}
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full relative flex justify-center items-center px-10 py-3"
              style={{ minHeight: "100px" }}
            >
              <div className="w-full absolute left-0 top-0 h-full">
                <img src={MessageAnswer} alt="Q&A" className="w-full h-full" />
              </div>
              <p
                className="text-2xl sm:text-3xl text-center relative"
                style={{ color: "#243475" }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default QA;
