'use client';

import useWeather from "@/lib/hooks/swr/useWeather";
import LocationIcon from "./_component/icons/Location";
import React from "react";
import Today from "./_component/Today";

export default function Weather({ params }: { params: Promise<{ location: string }> }) {
    const { location } = React.use(params);
    const { weather, isLoading } = useWeather(location);
    
    if(isLoading) return <>Loading...</>
    if(!weather) return null;

    return (
      <main className="p-6">
        <div className="flex justify-between py-4 px-2">
          <div className="flex gap-3">
            <span><LocationIcon /></span>
            <span className="text-3xl text-slate-900">{`${weather.location.name} - ${weather.location.country}`}</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Today current={weather.current} />
        </div>
      </main>
    );
  }
  