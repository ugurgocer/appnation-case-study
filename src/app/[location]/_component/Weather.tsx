'use client';

import useWeather from "@/lib/hooks/swr/useWeather";
import React from "react";
import MetricSwitch from "./MetricSwitch";
import Today from "./Today";
import ForecastIcon from "./icons/Forecast";
import Forecast from "./Forecast";
import LocationIcon from "./icons/Location";
import { notFound } from "next/navigation";

export default function Weather({ id }: { id: string }) {
  const { weather, isLoading, error } = useWeather(id);

  if(isLoading) return <>Loading...</>;

  if(error) {
    throw error;
  }

  if(!weather) {
    notFound()
  }
  
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
  