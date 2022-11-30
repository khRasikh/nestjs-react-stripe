import Link from "next/link";
import React from "react";
function Hero() {
  return (
    <div className="bg-gray-100 overflow-y-hidden">
      {/* Code block starts */}
      <div className="bg-gray-100 bg-[url('/images/fruits.jpg')]">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col bg-blue-50 py-10 mb-5 opacity-80 sm:mb-10 rounded-md">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              Welcome to
              <span className="text-indigo-700 mx-2">YOUR</span>
              E-Commerce Website
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-black font-normal text-center text-sm sm:text-lg">
              Here you enjoy the full-responsive E-Commerce website using the
              most recent technologies both in Front-end and Backed-end.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
              <Link href={"/products"}>All Products</Link>
            </button>
            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
              <Link href={"/dashboard"}>Read More</Link>
            </button>
          </div>
        </div>
      </div>
      {/* Code block ends */}
    </div>
  );
}

export default Hero;
