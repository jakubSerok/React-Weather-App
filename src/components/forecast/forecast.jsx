import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="text-3xl font-bold">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex items-center h-40 p-5 m-5 text-base bg-gray-200 cursor-pointer rounded-3xl">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="w-16"
                    alt="weather"
                  />
                  <label className="flex-1 ml-4 font-semibold">
                    {forecastDays[idx]}
                  </label>
                  <label className="flex-1 text-right">
                    {item.weather[0].description}
                  </label>
                  <label className="text-gray-700">
                    {Math.round(item.main.temp_max)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid grid-cols-2 p-5 gap-15">
                <div className="flex items-center">
                  <label>Pressure:</label>
                  <label className="ml-2">{item.main.pressure}</label>
                </div>
                <div className="flex items-center">
                  <label>Humidity:</label>
                  <label className="ml-2">{item.main.humidity}</label>
                </div>
                <div className="flex items-center">
                  <label>Clouds:</label>
                  <label className="ml-2">{item.clouds.all}%</label>
                </div>
                <div className="flex items-center">
                  <label>Wind speed:</label>
                  <label className="ml-2">{item.wind.speed} m/s</label>
                </div>
                <div className="flex items-center">
                  <label>Sea level:</label>
                  <label className="ml-2">{item.main.sea_level}m</label>
                </div>
                <div className="flex items-center">
                  <label>Feels like:</label>
                  <label className="ml-2">{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
