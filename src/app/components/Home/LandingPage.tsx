import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      {/* Main Container */}
      <div className="w-11/12 max-w-6xl p-4 bg-gradient-to-l from-green-200 to-custom-landing-page rounded-2xl shadow-lg border-t border-b border-r">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="max-w-lg mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
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
                className="w-full px-4 py-3 focus:outline-none"
              />
              <button className="px-6 py-3 text-white bg-green-700 hover:bg-green-600">
                Search Home
              </button>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full md:w-1/2 flex justify-center items-center md:block hidden">
            {/* Transparent Image */}
            <Image
              src="/images/LandingPageImage.jpeg" 
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
