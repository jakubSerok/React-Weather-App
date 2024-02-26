import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="w-[500px] rounded-md shadow-md text-white bg-[#333] mt-20 mx-auto  p-20">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-[18px] m-0">{data.city}</p>
          <p className="text-[14px] font-normal m-0">
            {data.weather[0].description}
          </p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt=""
          className="w-[100px]"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="w-auto font-semibold text-[70px] my-[10px] mx-0">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="w-full pl-[20px]">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
