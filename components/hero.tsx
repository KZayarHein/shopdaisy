import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Navbar from "./navbar";

function HeroPage() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen">
        <div className="absolute bottom-0 md:bottom-[-50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
          <p className="text-sm md:text-2xl opacity-70">The Best Look</p>
          <h1 className="text-2xl md:text-6xl font-bold mb-2">
            Anytime Anywhere
          </h1>
          <p className="text-sm lg:text-2xl opacity-70 mb-2">
            Starts from 10,000MMK
          </p>

          <a className="btn-md outline-none rounded-full py-2 md:btn-lg bg-gray-600 hover:bg-gray-500 cursor-pointer opacity-75">
            <span className="text-white">View</span>
          </a>
        </div>

        <div className="carousel w-full min-h-screen">
          <div id="slide1" className="carousel-item relative w-full ">
            <Image
              src="/background-1.jpg"
              fill
              alt="background-1"
              objectFit="cover"
            />
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image
              src="/background-2.jpg"
              fill
              alt="background-1"
              objectFit="cover"
            />
          </div>

          {/* Previous and Next button */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
            <a
              href="#slide1"
              className="btn md:min-h-[126px] bg-opacity-75 bg-gray-700 hover:bg-gray-600"
            >
              <FaArrowLeft className="text-white" />
            </a>
            <a
              href="#slide2"
              className="btn md:min-h-[126px] bg-opacity-75 bg-gray-700 hover:bg-gray-600"
            >
              <FaArrowRight className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* track button */}
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#slide1" className="btn btn-xs circle-btn active" />
        <a href="#slide2" className="btn btn-xs bg-gray-500 circle-btn" />
        <a href="#item3" className="btn btn-xs circle-btn" />
        <a href="#item4" className="btn btn-xs circle-btn" />
      </div>
    </>
  );
}

export default HeroPage;
