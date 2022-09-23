import "./Banner.scss";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/banner/logo.webp";
import BgImage from "../../assets/banner/banner-image.png";
import Container from "../container";
import MintBox from "../mintBox";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import Notification from "../notification";

const Banner = () => {
  const dispatch = useDispatch();
  const headerRef = useRef();
  const blockchain = useSelector((state) => state.blockchain);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef?.current) {
      setHeaderHeight(headerRef?.current?.offsetHeight);
    }
  }, [headerRef?.current]);

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  return (
    <div className="w-screen min-h-screen bg-bdb-purple banner">
      {blockchain.errorMsg && (
        <Notification notification={blockchain.errorMsg} />
      )}
      <Container className="h-full py-4 banner-container">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          ref={headerRef}
          className="w-full flex space-x-3.5 justify-start items-center p-3 banner-header"
        >
          <img src={Logo} alt="BoreDickButts Logo" className="w-35px h-35px" />
          <p className="text-lg font-normal">BoreDickButts</p>
        </div>
        <div
          className="w-full flex flex-col justify-center items-center space-y-16 md:space-y-8 lg:space-y-0 lg:flex-row banner-body"
          style={{
            minHeight: `calc(100vh - ${headerHeight}px)`,
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 flex justify-center items-center flex-col space-y-8 md:space-y-16 banner-left"
          >
            <div className="text-center text-xl lg:text-2xl space-y-3">
              <p>Boredickbutts is derivatives BAYC and CryptoDickButts</p>
              <p>8888 3d DDB to help launch pay and get paid in crypto.</p>
            </div>
            <div className="w-full flex justify-center items-center">
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <button
                  className="banner-left__button button-color"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}
                >
                  Mint Now
                </button>
              ) : (
                <MintBox />
              )}
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 banner-right"
          >
            <div className="w-full relative h-full banner-right__container">
              <div className="text-bdb-red w-40 md:w-80 xl:w-96 h-auto absolute banner-right__shape-red">
                <svg viewBox="0 0 500 444.61" fill="currentColor">
                  <path d="M494.2,243.94L390.84,422.97c-7.73,13.39-22.01,21.63-37.47,21.63H146.63c-15.46,0-29.74-8.25-37.47-21.63L5.8,243.94  c-7.73-13.39-7.73-29.88,0-43.27L109.16,21.63C116.89,8.25,131.18,0,146.63,0h206.73c15.46,0,29.74,8.25,37.47,21.63L494.2,200.67  C501.93,214.06,501.93,230.55,494.2,243.94z"></path>
                </svg>
              </div>
              <div className="text-white w-40 md:w-80 xl:w-96 h-auto absolute banner-right__shape-white">
                <svg viewBox="0 0 500 444.61" fill="currentColor">
                  <path d="M494.2,243.94L390.84,422.97c-7.73,13.39-22.01,21.63-37.47,21.63H146.63c-15.46,0-29.74-8.25-37.47-21.63L5.8,243.94  c-7.73-13.39-7.73-29.88,0-43.27L109.16,21.63C116.89,8.25,131.18,0,146.63,0h206.73c15.46,0,29.74,8.25,37.47,21.63L494.2,200.67  C501.93,214.06,501.93,230.55,494.2,243.94z"></path>
                </svg>
              </div>
              <div className="w-full h-full flex justify-center items-center relative z-20">
                <div className="w-1/2 lg:w-3/5">
                  <img
                    src={BgImage}
                    alt="BoreDickButts NFT"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
