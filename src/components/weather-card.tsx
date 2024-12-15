import React from "react";

export default function WeatherCard() {
  return (
    <div className="relative">
      <div className="flex flex-col rounded-[20px] shadow-2xl shadow-branding-300/40 px-12 py-5 text-2xl">
        <h2 className="text-4xl font-bold">
          Tehran <span className="font-light">35ºC</span>
        </h2>
        <span>Wind speed: 11 km</span>
        <span>Tuesday: 19:52</span>
        <span>Cloudy</span>
      </div>
    </div>
  );
}
