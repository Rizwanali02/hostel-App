import React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const ListingPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#ebf4f1] to-[#DFFCF5] min-h-screen p-6">
      <div className="container mx-auto grid grid-cols-12 gap-6">
        {/* Filters Section */}
        <div className="col-span-12 md:col-span-3 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

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
                  <Button key={location} variant="outline" className="text-sm">
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
              {["Storage", "Window Cooler", "Air Conditioning", "Balcony"].map(
                (amenity) => (
                  <Button key={amenity} variant="outline" className="text-sm">
                    {amenity}
                  </Button>
                )
              )}
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
                  <Button key={occupancy} variant="outline" className="text-sm">
                    {occupancy}
                  </Button>
                )
              )}
            </div>
          </div>

          <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
            Search & Connect
          </Button>
        </div>

        {/* Listings Section */}
        <div className="col-span-12 md:col-span-9">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              381 Hostels and PGs in Delhi, India
            </h2>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price_low">Price: Low to High</SelectItem>
                <SelectItem value="price_high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Listings */}
          <div className="grid gap-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="flex bg-white h-full p-3 rounded-lg shadow-md overflow-hidden"
              >
                <div className="w-1/3">
                  <img
                    src="/images/hostelimage2.png"
                    alt="Hostel"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Okazaki House</h3>
                    <p className="text-sm text-gray-600">
                      C-193 Near M Block Market Gate No 3, Greater Kailash 1,
                      Delhi
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <span className="flex items-center">
                        <i className="ri-star-fill text-yellow-400"></i> 4.2
                      </span>
                      <span>(1001 Ratings)</span>
                      <span className="text-green-500">Elevator</span>
                      <span>Free Wi-Fi</span>
                      <span>Geyser</span>
                      <span>7 more</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-green-600">
                      ₹18,000{" "}
                      <span className="line-through text-gray-500">
                        ₹20,000
                      </span>
                    </div>
                    <div className="flex space-x-4">
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Book now
                      </Button>
                      <Button variant="outline">Schedule a visit</Button>
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
