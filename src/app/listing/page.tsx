"use client";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { AiOutlineFilter } from "react-icons/ai"; // Filter Icon
import { useState } from "react";

const ListingPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilterDrawer = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="bg-gradient-to-r from-[#ebf4f1] to-[#DFFCF5] min-h-screen p-6">
      <div className="container mx-auto grid grid-cols-12 gap-6">
        {/* Filters Section - Hidden on Mobile */}
        <div
          className={`col-span-12 md:col-span-3 bg-white rounded-lg shadow-md p-6 md:block ${
            isFilterOpen ? "block" : "hidden"
          } fixed inset-0 bg-white z-50 md:relative md:z-auto md:p-6`}
        >
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <button
            className="absolute top-4 right-4 text-xl text-gray-600 md:hidden"
            onClick={toggleFilterDrawer}
          >
            &times;
          </button>

          {/* Filter Content */}
          <div>
            {/* Search Location */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Popular Locations in Kota, India
              </label>
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {["Land Mark", "Dadabari", "Pratap Nagar", "City Palace"].map(
                  (location) => (
                    <Button
                      key={location}
                      variant="outline"
                      className="text-sm"
                    >
                      {location}
                    </Button>
                  )
                )}
              </div>
            </div>

            {/* Budget Slider */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget
              </label>
              <Slider
                defaultValue={[5000]}
                min={5000}
                max={18000}
                step={1000}
                className="mt-2"
              />
              <div className="flex justify-between text-sm mt-2">
                <span>₹5000</span>
                <span>₹18,000</span>
              </div>
            </div>

            {/* Gender Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="coed">Co-ed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amenities
              </label>
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Storage",
                  "Window Cooler",
                  "Air Conditioning",
                  "Balcony",
                ].map((amenity) => (
                  <Button key={amenity} variant="outline" className="text-sm">
                    {amenity}
                  </Button>
                ))}
              </div>
            </div>

            {/* Occupancy */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Occupancy
              </label>
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {["Double", "Single Occupancy", "Triple Occupancy", "Dorm"].map(
                  (occupancy) => (
                    <Button
                      key={occupancy}
                      variant="outline"
                      className="text-sm"
                    >
                      {occupancy}
                    </Button>
                  )
                )}
              </div>
            </div>

            <Button className="w-full mt-6 bg-[#3E937F] hover:bg-[#347b6b] text-white">
              Search & Connect
            </Button>
          </div>
        </div>

        {/* Listings Section */}
        <div className="col-span-12 md:col-span-9">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-semibold">
                381 Hostels and PGs in Delhi, India
              </h2>
            </div>
            <div className="flex">
              {/* Filter Icon for Mobile */}
              <Button
                variant="outline"
                className="md:hidden text-xl text-green-600"
                onClick={toggleFilterDrawer}
              >
                <AiOutlineFilter />
              </Button>
              <Select>
                <SelectTrigger className="w-[180px] min-w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Listings */}
          <div className="flex flex-col gap-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex flex-col p-3 sm:flex-row md:h-[250px] bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Image Section */}
                <div className="w-full sm:w-1/3">
                  <img
                    src="/images/hostelimage2.png"
                    alt="Hostel"
                    className="object-cover w-full h-44 sm:h-full"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between w-full p-4 sm:w-2/3">
                  <div>
                    {/* Title and Address */}
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">Okazaki House</h3>
                      <Button variant="outline">Male</Button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      C-193 Near M Block Market Gate No 3, Greater Kailash 1,
                      Delhi
                    </p>

                    {/* Ratings and Amenities */}
                    <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
                      <div className="flex items-center">
                        <span className="flex items-center bg-[#F3F9FF] p-1">
                          <i className="ri-star-fill text-yellow-400">
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              className="w-5 h-5"
                            >
                              <path d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z" />
                            </svg>
                          </i>
                          4.2
                        </span>
                        <span>(1001 Ratings)</span>
                      </div>
                      <div className="">
                        <span className="text-green-500">Elevator</span>
                        <span>
                          <i className="fa-solid fa-wifi"></i> Free Wi-Fi
                        </span>
                        <span>Geyser</span>
                        <span>7 more</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                    {/* Pricing */}
                    <div className="text-lg font-bold text-green-600">
                      ₹18,000{" "}
                      <span className="line-through text-gray-500">
                        ₹20,000
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex sm:flex-col gap-2 mt-4 sm:mt-0">
                      <Button className="bg-[#3E937F] hover:bg-[#347b6b] text-white w-full sm:w-auto">
                        Book now
                      </Button>
                      <Button className="bg-[#3E937F] hover:bg-[#347b6b] w-full sm:w-auto">
                        Schedule a visit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
