"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { AiOutlineFilter } from "react-icons/ai"; // Filter Icon
import { useEffect, useState } from "react";
import FilterSection from "../components/Filter/FilterSection";
import Link from "next/link";
import { Property } from "../interface/property.interface";

const ListingPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://46.202.164.192:5002/api/v1/properties')
      .then(response => response.json())
      .then(data => {
        setData(data.data.result);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  const toggleFilterDrawer = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <div className="bg-gradient-to-r from-[#ebf4f1] to-[#DFFCF5] min-h-screen p-6">
      <div className="container mx-auto grid grid-cols-12 gap-6">
        {/* Filters Section - Hidden on Mobile */}
        <FilterSection
          isFilterOpen={isFilterOpen}
          toggleFilterDrawer={toggleFilterDrawer}
        />

        {/* Listings Section */}
        <div className="col-span-12 md:col-span-9">
          <div className="md:flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-semibold">
                381 Hostels and PGs in Kota, Rajasthan
              </h2>
            </div>
            <div className="flex justify-between">
              {/* Filter Icon for Mobile */}
              <Button
                variant="outline"
                className="md:hidden text-xl text-green-600"
                onClick={toggleFilterDrawer}
              >
                <AiOutlineFilter />
              </Button>
              <Select>
                <SelectTrigger className="w-[200px]">
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
            {data.length > 0 ? data.map((data:Property,index) => (
              <div
                key={data.id}
                className="flex flex-col p-3 sm:flex-row md:h-[250px] bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Image Section */}
                <Link href={`/listing/${index}`}  prefetch={true} className="w-full sm:w-1/3">
                  <img
                    src={data.thumbnail}
                    alt="Hostel"
                    className="object-cover w-full h-44 sm:h-full"
                  />
                </Link>

                {/* Content Section */}
                <div className="flex flex-col justify-between w-full p-4 sm:w-2/3">
                  <div>
                    {/* Title and Address */}
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">{data.name}</h3>
                      <Button variant="outline">Male</Button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{data.address}
                    </p>

                    {/* Ratings and Amenities */}
                    <div className="flex flex-wrap flex-col gap-2 mt-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center bg-[#F3F9FF] p-1">
                          <i className="ri-star-fill text-yellow-400">
                            <svg
                              key={data.id}
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
                        <span className="text-[#6D6D6D]">(1001 Ratings)</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="flex items-center gap-1">
                          <i className="fa-regular fa-building"></i>Elevator
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-wifi"></i>Wi-Fi
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-hot-tub-person"></i>Geyser
                        </span>
                        <span>+7 more</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-lg font-bold text-green-600">
                      ₹18,000{" "}
                      <span className="line-through text-gray-500">
                        ₹20,000
                      </span>
                    </div>

                    <div className="flex sm:flex-col gap-2 mt-4 sm:mt-0">
                      <Button className="bg-[#3E937F] hover:bg-[#347b6b] text-white w-full sm:w-auto">
                        Book now
                      </Button>
                      <Link href={`/listing/${index}`}>
                      <Button className="bg-[#3E937F] hover:bg-[#347b6b] w-full sm:w-auto">
                        Schedule a visit
                      </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )):(
              <div>No properties found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
