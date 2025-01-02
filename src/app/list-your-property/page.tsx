"use client";
import React, { useState } from "react";
import Reviews from "../components/Home/Reviews";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
const ListProperty = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    mobileNumber: "",
    propertyAddress: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Log the form values to the console
  };
  return (
    <div className="bg-gradient-to-r from-[#D4FBF1] to-[#FFFFFF] py-10 px-1">
      <div className="flex">
        <div className="w-[40%] text-right hidden lg:block">
          <div className="text-[50px] mt-28">
            <div>
              <strong>Elevate Your</strong>
            </div>
            <div>
              <strong>Potential - P</strong>
            </div>
            <div>
              <strong>Us for</strong>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] flex justify-between mb-6 lg:mb-0 bg-gradient-to-r from-[#DFFCF5] to-[#C5F9EC] rounded-2xl rounded-tr-[50px] rounded-br-[50px]">
          <div className="text-[50px] mt-28 hidden lg:block">
            <div className="ml-1">
              <strong>Propertys</strong>
            </div>
            <div>
              <strong>artner with</strong>
            </div>
            <div className="ml-3">
              <strong><span className="text-[#3E937F]">Success</span></strong>
            </div>
          </div>
          <Image
            alt="list property png"
            src={"/images/listpropertyimage.png"}
            height={450}
            width={450}
            className="max-w-full h-auto pr-4"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center p-3">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#3E937F]">
          Why <span className="text-[#00022C]">Choose Us</span>
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Join us to create a hassle-free living experience
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Dashboard */}
          <div className=" p-6">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#3E937F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#00022C]">
              <span className="text-[#3E937F]">DASH</span>BOARD
            </h3>
            <p className="text-md text-[#00022CB5] mt-2">
              A comprehensive interface for managing multiple items
            </p>
          </div>

          {/* Competitive Rate */}
          <div className=" p-6">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#3E937F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10.5V6.75a3.75 3.75 0 013.75-3.75h10.5A3.75 3.75 0 0121 6.75V17.25A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V13.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12.75h3v3h-3v-3zm3 0v-3h-3v3h3zm4.5 0h3v3h-3v-3zm3 0v-3h-3v3h3zm-7.5 3v3h3v-3h-3zm3-3v-3h-3v3h3zm3 3v3h3v-3h-3zm0-3v-3h3v3h-3z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#00022C]">
              <span className="text-[#3E937F]"> COMPETITIVE</span> RATE
            </h3>
            <p className="text-md text-[#00022CB5] mt-2">
              Set your prices to be ahead of your competition
            </p>
          </div>

          {/* User Activity */}
          <div className=" p-6">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#3E937F]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v5.25m0-5.25V9.75m0 0L9 12m3-2.25L15 12m-3-2.25a3.375 3.375 0 11-3.375-3.375A3.375 3.375 0 0112 7.125zm0 0a3.375 3.375 0 013.375-3.375A3.375 3.375 0 0112 7.125z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#00022C]">
              <span className="text-[#3E937F]">USER</span> ACTIVITY
            </h3>
            <p className="text-md text-[#00022CB5] mt-2">
              View all your customer’s activities, including bookings, reviews,
              and ratings.
            </p>
          </div>
        </div>
      </div>
      <div>
      <div className="py-16 px-6 sm:px-12 lg:px-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Words from our <span className="text-green-400">Customers</span>
        <span className="ml-2 text-2xl">✱</span>
      </h2>
        <Reviews />
      </div>
      </div>
      <div className="flex flex-wrap p-4 items-center justify-center">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0">
          <Image
            alt="list property png"
            src={"/images/listpropertyimage.png"}
            height={450}
            width={450}
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Card className="w-full max-w-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-lg font-bold">
                Tell us more about your property
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name */}
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="border border-gray-300 rounded-md focus:ring-[#3E937F]"
                />

                {/* Email ID */}
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="border border-gray-300 rounded-md focus:ring-[#3E937F]"
                />

                {/* Mobile Number */}
                <Input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="border border-gray-300 rounded-md focus:ring-[#3E937F]"
                />

                {/* Property Address */}
                <Input
                  type="text"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  placeholder="Property Address"
                  className="border border-gray-300 rounded-md focus:ring-[#3E937F]"
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#3E937F] text-white hover:bg-[#2C785E]"
                >
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ListProperty;
