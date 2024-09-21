import React from "react";
import Icon from "./Icon"; // Icon bileşenini kullanıyoruz

const FlightDetails = ({ flight }) => {
  return (
    <div className="flex items-center space-x-4">
      <Icon airline={flight.airline} />
      <div>
        <h2 className="font-semibold text-lg">{flight.airline}</h2>
        <p className="text-sm text-gray-500">{flight.time}</p>
        <p>
          {flight.from} to {flight.to}
        </p>
        <p className="text-sm text-gray-400">{flight.duration}</p>
      </div>
    </div>
  );
};

export default FlightDetails;
