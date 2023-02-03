import React from "react";
import heroImage from "../../../assets/slider-1.webp";

const Hero = () => {
  return (
    <section className="text-gray-100">
      <div className="container flex flex-col justify-center px-6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col text-black justify-center text-center px-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-[#309255] font-medium leading-none sm:text-xl">
            Start your favourite course
          </h1>
          <h1 className="text-3xl text-[#1D2733] font-medium leading-none sm:text-5xl my-7">
            Now learning from anywhere, and build your{" "}
            <span className="text-[#309255]"> bright career.</span>
          </h1>
          <p className="mt-6 mb-8 text-[#52565b] text-lg sm:mb-12">
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="/"
              className="px-8 py-3 text-lg text-white font-semibold border rounded bg-[#309255] border-gray-100"
            >
              Start A Course
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 mt-8 lg:mt-0">
          <img src={heroImage} alt="" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
