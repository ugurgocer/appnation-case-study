'use client';

import useWeather from "@/lib/hooks/swr/useWeather";
import LocationIcon from "./_component/icons/Location";
import React from "react";
import Today from "./_component/Today";
import MetricSwitch from "./_component/MetricSwitch";
import Forecast from "./_component/Forecast";
import ForecastIcon from "./_component/icons/Forecast";

export default function Weather({ params }: { params: Promise<{ location: string }> }) {
    const { location } = React.use(params);
    const { weather, isLoading } = useWeather(location);
    
    if(isLoading) return <>Loading...</>
    if(!weather) return null;

    return (
      <main className="flex flex-col gap-5 p-6">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start justify-between py-4 px-2 gap-3">
          <span className="flex gap-3 text-3xl items-center text-slate-900 max-w-full line-clamp-2 text-ellipsis">
            <LocationIcon className="fill-slate-900" />
            {`${weather.location.name} - ${weather.location.country}`}
          </span>
          <MetricSwitch />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Today current={weather.current} />
        </div>
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start justify-between py-4 px-2 gap-3">
          <span className="flex gap-3 text-2xl">
            <ForecastIcon className="fill-slate-600" />
            <span>Five days forecast</span>
          </span>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <Forecast forecastDays={weather.forecast} />
        </div>
      </main>
    );
  }
  