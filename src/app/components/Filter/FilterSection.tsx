import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import React from 'react'

type FilterSectionProps = {
    isFilterOpen: boolean;
    toggleFilterDrawer: () => any;
  }

const FilterSection: React.FC<FilterSectionProps> = ({isFilterOpen,toggleFilterDrawer}) => {
  return (
    <div
    className={`col-span-12 md:col-span-3 bg-white rounded-lg shadow-md p-6 md:block ${
      isFilterOpen ? "block" : "hidden"
    } fixed inset-0 bg-white z-50 md:relative md:z-auto md:p-6 md:h-auto md:overflow-visible`}
  >
    <h2 className="text-lg font-semibold mb-4">Filters</h2>
    <button
      className="absolute top-4 right-4 text-xl text-gray-600 md:hidden"
      onClick={toggleFilterDrawer}
    >
      &times;
    </button>

    {/* Filter Content */}
    <div className={`md:h-auto ${isFilterOpen ? "h-[calc(100vh-3rem)] overflow-y-auto" : ""} ${isFilterOpen ? "pb-10 px-3" :""}`}>
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
  )
}

export default FilterSection