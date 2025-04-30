import React from "react";
import { ICurrentWeather } from "@/lib/types/ICurrentWeather";
import Wind from "./Wind";
import TodayCard from "./TodayCard";
import PrecipAndCloud from "./PrecipAndCloud";
import Pressure from "./Pressure";
import Visibility from "./Visibility";

export default function Today({ current }: { current: ICurrentWeather }) {
    return (
      <div className="col-span-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">
        <TodayCard current={current} />
        <Wind wind={current.wind} />
        <PrecipAndCloud cloud={current.cloud} precip={current.precip} />
        <Pressure pressure={current.pressure} />
        <Visibility vis={current.vis} />
      </div>
    );
  }
  