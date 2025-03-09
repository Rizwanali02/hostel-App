import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex md:items-center p-4 justify-center md:h-[70%] container mx-auto">
      {/* Main Container */}
      <div className="relative md:w-11/12 max-w-6xl p-4 bg-gradient-to-r from-green-100 to-[#C5F9EC] rounded-2xl rounded-tr-[50px] rounded-br-[50px]">
        <Image
          src="/images/monkey-image.png"
          alt="monkey"
          className="absolute top-4 left-10 md:left-56 transform -translate-y-1/2 hidden md:block"
          width={150}
          height={150}
        />
        <Image
          src="/images/zzzzz.png"
          alt="monkey"
          className="absolute top--10 md:right-40 transform -translate-y-1/2 hidden lg:block"
          width={120}
          height={120}
        />

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="max-w-lg mb-8 md:mb-0">
            <div className="flex">
              <h1 className="text-4xl md:text-8xl font-bold text-gray-800 leading-tight">
                FIND <br />
                YOUR <br />
                SECOND <br />
                <span className="text-green-600">HOME</span>
              </h1>
              <div className="w-full sm:w-1/2 justify-center items-center block md:hidden">
                <Image
                  src="/images/landing.png"
                  alt="Sleeping illustration"
                  width={150}
                  height={170}
                  className="ml-10"
                />
              </div>
            </div>
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
          <div className="w-full md:w-3/4 lg:w-1/2 justify-center items-center md:block hidden">            {/* Transparent Image */}
            <Image
              src="/images/landing.png"
              alt="Sleeping illustration"
              width={400}
              height={250}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
