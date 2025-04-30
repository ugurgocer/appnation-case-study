import React from "react";
import { ICurrentWeather } from "@/lib/types/ICurrentWeather";
import { useAppSelector } from "@/lib/hooks/rtk";
import ConditionIcon from "../icons/ConditionIcon";
import HumidityIcon from "../icons/Humidity";
import FeelsLikeIcon from "../icons/FeelsLike";
import HeatIndexIcon from "../icons/HeatIndex";

export default function TodayCard({ current }: { current: ICurrentWeather }) {
    const metric = useAppSelector((state) => state.metric.selected);

    const localDate = React.useMemo(() => {
        const date = new Date(current.lastUpdatedDate);

        return `Today, ${date.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit"
          })}`;
    }, [])

    return (
        <div className="flex flex-col row-span-2 bg-primary rounded-lg shadow-sm p-6 justify-around text-default">
          <div className="flex items-center justify-around py-6">
              <div className="flex flex-col flex-1 items-center">
                  <span >{localDate}</span>
                  <span className="text-7xl p-6 w-fit">{current.temp[metric]}°</span>
              </div>
              <div className="flex flex-col flex-1 items-center">
                  <ConditionIcon url={current.condition.icon} name={current.condition.text} size={128} />
                  <span>{current.condition.text}</span>
              </div>
          </div>
          <div className="flex justify-around items-center gap-2 text-center">
            <div className="flex flex-1 flex-col items-center gap-1">
              <HumidityIcon className="h-7 fill-default" />
              <span className="font-extralight">Humidity</span>
              <span className="w-12 h-7">{current.humidity}%</span>
            </div>
            <div className="flex flex-1 flex-col items-center gap-1">
              <FeelsLikeIcon className="h-7 fill-default" />
              <span className="font-extralight">Feels like</span>
              <span className="w-fit h-fit">{current.feelsLike[metric]}°</span>
            </div>
            <div className="flex flex-1 flex-col items-center gap-1">
              <HeatIndexIcon className="h-7 fill-default" />
              <span className="font-extralight">Heat Index</span>
              <span className="w-fit h-fit">{current.heatIndex[metric]}°</span>
            </div>
          </div>
        </div>
    );
  }
  