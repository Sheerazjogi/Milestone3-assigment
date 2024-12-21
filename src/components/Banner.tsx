import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  return (
    <div className="md:px-4 px-3 pt-32 bg-[#ffffff] mx-auto">
      <div className="text-center text-black">
        <h1 className="sm:text-5xl text-4xl font-bold mb-5 py-3 lg:text-6xl ">
          Welcome to our Blog
        </h1>
        <p className="text-gray-800  lg:w-3/5 mx-auto mb-5 text-center text-xl sm:text-2xl font-primary">
        Dive into the World of Technology: Unveiling Innovations  That Shape Our Future
        </p>
        <div className="">
          <Link
            href={"/"}
            className="font-medium hover:text-orange-500  border border-gray-300 px-4 py-3
                inline-flex items-center "
          >
            Learn More
            <FaArrowRight className="mt-1 ml-2 " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
