"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const ScheduleCard = () => {
  const [activeTab, setActiveTab] = useState("scheduleVisit");

  const handleTabChange = (tab:string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col w-full lg:w-[40%] sm:mt-10">
      <div className="flex justify-between gap-2 border-2 border-gray-200 rounded-3xl p-1">
        <span
          className={`w-full rounded-3xl p-1 text-center cursor-pointer ${
            activeTab === "scheduleVisit"
              ? "bg-[#3E937F] hover:bg-[#357869] text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
          onClick={() => handleTabChange("scheduleVisit")}
        >
          Schedule a Visit
        </span>
        <span
          className={`w-full rounded-3xl p-1 text-center cursor-pointer ${
            activeTab === "reserveNow"
              ? "bg-[#3E937F] hover:bg-[#357869] text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
          onClick={() => handleTabChange("reserveNow")}
        >
          Reserve Now
        </span>
      </div>

      <form className="mt-4 space-y-4">
        <div className="flex flex-col gap-4 bg-gradient-to-r from-[#D8FFF5] to-[#5CD5B7DD] p-4 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex items-center gap-2 border border-gray-300 rounded-md p-3 bg-white">
            <span className="flex items-center gap-1">
              <img
                src="/images/flag.png"
                alt="India Flag"
                className="w-5 h-5"
              />
              <span className="text-gray-700">+91</span>
            </span>
            <input
              type="number"
              placeholder="Mobile Number"
              className="flex-1 border-none outline-none focus:ring-0"
            />
          </div>
          <p className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
            We are accepting bookings for stay duration of minimum 3 months.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img
              src="/images/whatsappicon.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            <label htmlFor="whatsapp-updates" className="text-sm text-gray-600">
              Get updates over WhatsApp
            </label>
          </div>

          <Switch id="whatsapp-updates" />
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I have read and agreed to the{" "}
            <a href="#" className="text-blue-600">
              terms and conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              privacy policy
            </a>
          </label>
        </div>
        <Button className="w-full bg-[#3E937F] hover:bg-[#357869]">
          Schedule a Visit
        </Button>
      </form>
    </div>
  );
};

export default ScheduleCard;
