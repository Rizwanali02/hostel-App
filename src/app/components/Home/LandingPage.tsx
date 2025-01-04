import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex md:items-center p-4 justify-center md:h-screen ">
      {/* Main Container */}
      <div className="md:w-11/12 max-w-6xl p-4 bg-gradient-to-r from-green-100 to-[#C5F9EC] rounded-2xl rounded-tr-[50px] rounded-br-[50px]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="max-w-lg mb-8 md:mb-0">
            <h1 className="text-4xl md:text-8xl font-bold text-gray-800 leading-tight">
              FIND <br />
              YOUR <br />
              SECOND <br />
              <span className="text-green-600">HOME</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Living Spaces for All: Co-ed, Boys, and Girls Residences.
            </p>
            <div className="mt-6 flex rounded-lg overflow-hidden shadow-md w-full max-w-xl">
              <input
                type="text"
                placeholder="Search Home"
                className="md:w-[550px] w-full px-4 py-3 focus:outline-none"
              />
              <button className="px-6 py-3 text-white bg-[#3E937F] hover:bg-[#347a69]">
                Search Home
              </button>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full md:w-1/2 justify-center items-center md:block hidden">
            {/* Transparent Image */}
            <Image
              src="/images/landing.png" 
              alt="Sleeping illustration"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
