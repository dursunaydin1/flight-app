import React from "react";
import {
  FaPlane,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
} from "react-icons/fa";

const FlightSearchBar = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaPlane className="text-black text-xl mr-2" />
          <h2 className="text-lg font-semibold text-black uppercase">
            Book Your Flight
          </h2>
        </div>
        <div className="flex gap-0.5">
          <button className="px-4 py-2 rounded-l-full text-gray-200 bg-purple-950 text-sm font-semibold">
            Round trip
          </button>
          <button className="px-4 py-2 rounded-r-full bg-gray-200 text-purple-950 text-sm font-semibold">
            One way
          </button>
        </div>
      </div>

      {/* Input Fields Section */}
      <div className="flex gap-0.5 mb-4">
        <div className="flex space-x-1 flex-1">
          {/* Departure Input */}
          <div className="relative flex-1 flex items-center">
            <FaPlaneDeparture className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-950" />
            <input
              type="text"
              className="pl-10 py-1 w-full border border-gray-300 rounded-l-full rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {/* Destination Input */}
          <div className="relative flex-1 flex items-center">
            <FaPlaneArrival className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-950" />
            <input
              type="text"
              className="pl-10 py-1 w-full border border-gray-300 rounded-l-none rounded-r-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="w-4"></div>

        <div className="flex space-x-1 flex-1">
          {/* Departure Date Input */}
          <div className="relative flex-1 flex items-center">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-950" />
            <input
              type="text"
              className="pl-10 py-1 w-full border border-gray-300 rounded-l-full rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {/* Return Date Input */}
          <div className="relative flex-1 flex items-center">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-950" />
            <input
              type="text"
              className="pl-10 py-1 w-full border border-gray-300 rounded-l-none rounded-r-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Submit Button Section */}
      <div className="flex justify-start">
        <button className="bg-purple-950 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-purple-700">
          Show flights
        </button>
      </div>
    </div>
  );
};

export default FlightSearchBar;
