"use client";

import React, { useState } from "react";
import { fetchWeatherData } from "@/actions/weather.actions";

const WeatherPage = () => {
  const [location, setLocation] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await fetchWeatherData(location);
    console.log(data);
    setWeatherData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-navy-900 p-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-navy-800 shadow-lg rounded-lg p-6 max-w-sm w-full"
      >
        <label className="block font-bold mb-2 text-white">
          Enter location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-2 w-full px-3 py-2 border border-navy-500 rounded-md bg-navy-700 text-black focus:outline-none focus:ring focus:ring-blue-400 placeholder-gray-400"
            placeholder="City name"
          />
        </label>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Submit
        </button>
      </form>

      {weatherData && (
        <div className="mt-6 p-6 bg-navy-800 shadow-lg rounded-lg max-w-sm w-full">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">
            Weather Data for {weatherData.name}
          </h2>

          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-300">Temperature</h3>
              <p className="text-2xl font-bold text-blue-400">
                {weatherData.main.temp}°C
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-300">Feels Like</h3>
              <p className="text-2xl font-bold text-blue-400">
                {weatherData.main.feels_like}°C
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-300">Humidity</h3>
              <p className="text-xl text-white">
                {weatherData.main.humidity}%
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-300">Pressure</h3>
              <p className="text-xl text-white">
                {weatherData.main.pressure} hPa
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-300">Wind Speed</h3>
              <p className="text-xl text-white">
                {weatherData.wind.speed} m/s
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-300">Conditions</h3>
              <p className="text-xl text-white capitalize">
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
