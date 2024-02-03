"use client";
import { products } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const images = [
  {
    id: 1,
    image: "/showcase-2.jpg",
    title: "Devices",
    description: "Find the best for you here",
  },
  {
    id: 2,
    image: "/showcase-1.jpg",
    title: "Pods",
    description: "Variety of choices available",
  },
  {
    id: 3,
    image: "/showcase-3.jpg",
    title: "Disposable",
    description: "Easy, clean & superb flavor",
  },
];

function FeaturePage() {
  //   const [slide, setSlide] = useState(4);
  return (
    <section className="px-20 py-5 ">
      <div className="flex flex-col gap-3">
        {images.map((img) => (
          <div
            key={img.id}
            className="p-3 bg-gray-900 rounded-md flex items-center gap-20 overflow-hidden relative"
          >
            <div className="flex-1 md:flex-auto md:flex md:flex-shrink-0 md:w-1/3 gap-3 items-center">
              <div className=" w-[150px] h-[230px] md:w-[220px] md:h-[300px] relative">
                <Image
                  src={img.image}
                  fill
                  alt={img.title}
                  className="rounded-md"
                />
              </div>
              <div className="text-white">
                <h3 className="text-xl md:text-3xl font-bold">{img.title}</h3>
                <p className="text-sm md:text-lg opacity-75">
                  {img.description}
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center justify-center">
              {products.map((p, index) => (
                <div key={p.id} className="carousel">
                  <div key={p.id} className="flex flex-col carousel-item">
                    <div className="flex flex-col border rounded-md shadow ">
                      <div
                        className="w-[150px] h-[150px] relative mx-auto"
                        id={`slide${p.id}`}
                      >
                        <Image src={p.image} fill alt="pod black" />
                      </div>
                    </div>
                    <div className="text-center mt-3 space-y-1 text-white">
                      <p className="text-sm">{p.title}</p>
                      <p className="font-bold text-sm">{p.discount}</p>
                      <p className="text-yellow-500 flex items-center justify-center space-x-1 text-sm">
                        <BiSolidStar />
                        <span>{p.points}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute right-5">
              {/* <a
                href="#slide1"
                className="btn md:min-h-[126px] bg-opacity-75 bg-gray-700 hover:bg-gray-600"
              >
                <FaArrowLeft className="text-white" />
              </a> */}
              <a
                // href={`#slide${slide}`}
                className="btn md:min-h-[100px] bg-opacity-75 bg-gray-700 hover:bg-gray-600"
              >
                <FaArrowRight
                  className="text-white"
                  //   onClick={() => {
                  //     setSlide((c) => c + 1);
                  //   }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturePage;
