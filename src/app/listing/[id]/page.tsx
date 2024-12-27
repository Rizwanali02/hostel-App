"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageSlider from "@/app/components/imageSlider/ImageSlider";
import ScheduleCard from "@/app/components/scheduleCard/ScheduleCard";
import SimilarProduct from "@/app/components/SimilarProduct/SimilarProduct";

const SinglePage = () => {
  const [activeSection, setActiveSection] = useState<string>("occupancy");
  const occupancyRef = useRef(null);
  const amenitiesRef = useRef(null);
  const detailsRef = useRef(null);

  const scrollToSection = (ref: any, section: string) => {
    setActiveSection(section);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EEF6FF] to-[#FFFFFF] p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <span>Logo</span> / <span>Kota</span> / <span>Okazaki House</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Left Section */}
          <div className="w-full lg:w-[60%]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Okazaki House
              </h1>
              <Button variant={"outline"}>Male</Button>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              C-193 Near M Block Market Gate No 3, Greater Kailash-1, Delhi
            </p>
            {/* Image Slider */}
            <div className="mt-4">
              <ImageSlider />
            </div>
          </div>

          {/* Right Section */}
          <ScheduleCard />
        </div>

        {/* Main Content */}
        <div className="mt-8 lg:w-[60%]">
          {/* Pricing and Details */}
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-[#00022CA8]">
              Starts from
            </h2>
            <p className="text-3xl md:text-4xl font-bold">₹18,000/mo*</p>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              *Denotes starting price inclusive of taxes. Final prices may vary
              based on room occupancy, customized services, and additional
              attributes.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-1 p-1 mt-5 w-full md:w-full lg:w-full border-2 border-gray-200 rounded-xl">
            <span
              className={`w-full text-center rounded-xl ${
                activeSection === "occupancy"
                  ? "bg-[#3E937F] text-white"
                  : "hover:bg-[#3E937F] hover:text-white"
              } cursor-pointer text-xs sm:text-xl py-1`}
              onClick={() => scrollToSection(occupancyRef, "occupancy")}
            >
              Occupancy
            </span>
            <span
              className={`w-full text-center rounded-xl ${
                activeSection === "amenities"
                  ? "bg-[#3E937F] text-white"
                  : "hover:bg-[#3E937F] hover:text-white"
              } cursor-pointer text-xs sm:text-xl py-1`}
              onClick={() => scrollToSection(amenitiesRef, "amenities")}
            >
              Amenities
            </span>
            <span
              className={`w-full text-center rounded-xl ${
                activeSection === "details"
                  ? "bg-[#3E937F] text-white"
                  : "hover:bg-[#3E937F] hover:text-white"
              } cursor-pointer text-xs sm:text-xl py-1`}
              onClick={() => scrollToSection(detailsRef, "details")}
            >
              Details
            </span>
          </div>

          {/* Sections */}
          <div ref={occupancyRef} className="mt-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              Available Occupancies
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="text-center">
                <p className="text-sm font-semibold text-[#00022CA8]">
                  Single Occupancy
                </p>
                <p className="text-2xl md:text-3xl font-semibold">₹24,000/mo</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-[#00022CA8]">
                  Double Occupancy
                </p>
                <p className="text-2xl md:text-3xl font-semibold">₹18,000/mo</p>
              </div>
            </div>
          </div>

          <div ref={amenitiesRef} className="mt-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              Amenities & Services
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-4 border-2 border-gray-200 rounded-3xl p-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#3E937F] rounded-full text-white">
                  ✔
                </div>
                <span className="text-gray-800 text-sm">Air Conditioning</span>
              </div>
              <div className="flex items-center gap-4 border-2 border-gray-200 rounded-3xl p-2 ">
                <div className="w-8 h-8 flex items-center justify-center bg-[#3E937F] rounded-full text-white">
                  ✔
                </div>
                <span className="text-gray-800 text-sm">Attached Washroom</span>
              </div>
              <div className="flex items-center gap-4 border-2 border-gray-200 rounded-3xl p-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#3E937F] rounded-full text-white">
                  ✔
                </div>
                <span className="text-gray-800 text-sm">Spacious Cupboard</span>
              </div>
              <div className="flex items-center gap-4 border-2 border-gray-200 rounded-3xl p-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#3E937F] rounded-full text-white">
                  ✔
                </div>
                <span className="text-gray-800 text-sm">High-speed Wifi</span>
              </div>
              <div className="flex items-center gap-4 border-2 border-gray-200 rounded-3xl p-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#3E937F] rounded-full text-white">
                  ✔
                </div>
                <span className="text-gray-800 text-sm">Laundry Service</span>
              </div>
              <div className="flex items-center gap-4 border-2 border-gray-200 rounded-3xl p-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[#3E937F] rounded-full text-white">
                  ✔
                </div>
                <span className="text-gray-800 text-sm">Hot Water Supply</span>
              </div>
            </div>
          </div>
          <div ref={detailsRef} className="mt-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              Details of Okazaki House
            </h3>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4 text-blue-600 underline text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
      <SimilarProduct />
    </div>
  );
};

export default SinglePage;
