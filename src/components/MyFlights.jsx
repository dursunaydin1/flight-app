import React from "react";
import FlightsOverview from "./FlightOverview";
import { FaChevronDown, FaStar } from "react-icons/fa";

const MyFlights = () => {
  return (
    <div className="">
      {/* Filter buttons and star rating section */}
      <div className="flex items-center pb-4 pt-4 px-10 border-gray-300 bg-white ">
        {/* Filter Buttons */}
        <div className="flex space-x-4 p-2 rounded-lg">
          {["Times", "Stops", "Airlines", "Airports", "Amenities"].map(
            (filter, idx) => (
              <button
                key={idx}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm bg-white hover:bg-gray-100"
              >
                {filter}
              </button>
            )
          )}
          {/* "Edit Search" button */}
          <button className="px-4 py-2 text-blue-600 flex items-center space-x-1 rounded-md">
            <span className="text-sm">Edit Search</span>
            <FaChevronDown className="text-blue-600" />
          </button>
        </div>

        {/* Star Rating Groups */}
        <div className="flex ml-auto space-x-6 mr-10">
          <div className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group">
            <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
              <div className="flex">
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-gray-300" />
              </div>
              <div className="flex">
                <FaStar className="mr-1 text-gray-300" />
                <FaStar className="mr-1 text-gray-300" />
                <FaStar className="mr-1 text-gray-300" />
              </div>
            </div>
          </div>
          <div className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group">
            <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
              <div className="flex">
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
              </div>
              <div className="flex">
                <FaStar className="mr-1 text-gray-300" />
                <FaStar className="mr-1 text-gray-300" />
                <FaStar className="mr-1 text-gray-300" />
              </div>
            </div>
          </div>
          <div className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group">
            <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
              <div className="flex">
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
              </div>
              <div className="flex">
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-gray-300" />
                <FaStar className="mr-1 text-gray-300" />
              </div>
            </div>
          </div>
          <div className="flex flex-col border-r border-gray-300 border-opacity-70 border-solid pr-4 group">
            <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
              <div className="flex">
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
              </div>
              <div className="flex">
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-gray-300" />
              </div>
            </div>
          </div>
          <div className="flex flex-col border-gray-300 border-opacity-70 border-solid pr-4 group">
            <div className="text-xs transition-transform duration-300 transform group-hover:scale-110">
              <div className="flex">
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
              </div>
              <div className="flex">
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
                <FaStar className="mr-1 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FlightsOverview />
    </div>
  );
};

export default MyFlights;
