"use client";

import React from "react";
import ConditionIcon from "../icons/ConditionIcon";
import { IForecastDay } from "@/lib/types/IForecastDay";
import { useAppSelector } from "@/lib/hooks/rtk";
import MaxTempIcon from "../icons/MaxTemp";
import MinTempIcon from "../icons/MinTemp";
import AvgTempIcon from "../icons/AvgTemp";

export default function ForecastItem({ forecast }: { forecast: IForecastDay }) {
    const metric = useAppSelector((state) => state.metric.selected);
    
    const localDate = React.useMemo(() => {
        const date = new Date(forecast.date);

        return date.toLocaleDateString(undefined, {
            weekday: "long",
            day: "2-digit",
            month: "long"
        });
    }, [])

    return (
        <div className="flex flex-col row-span-1 bg-default rounded-lg shadow-sm px-3 py-6 gap-5 justify-around items-center">
            <h5 className="text-xl font-semibold ">{localDate}</h5>
            <ConditionIcon
                name={forecast.condition.text}
                url={forecast.condition.icon}
                size={64}
            />
            <span className="text-center" >{forecast.condition.text}</span>
            <div className="flex justify-around items-center gap-2 text-center w-full">
                <div className="flex flex-1 flex-col items-center gap-1 h-24">
                    <AvgTempIcon className="h-7 fill-primary" />
                    <span className="font-extralight h-7">Average</span>
                    <span className="w-12 h-7">{forecast.avgTemp[metric]}°</span>
                </div>
                <div className="flex flex-1 flex-col items-center gap-1 h-24">
                    <MinTempIcon className="h-7 fill-primary" />
                    <span className="font-extralight h-7">Minimum</span>
                    <span className="w-fit h-fit">{forecast.minTemp[metric]}°</span>
                </div>
                <div className="flex flex-1 flex-col items-center gap-1 h-24">
                    <MaxTempIcon className="h-7 fill-primary" />
                    <span className="font-extralight">Maximum</span>
                    <span className="w-fit h-fit">{forecast.maxTemp[metric]}°</span>
                </div>
            </div>
        </div>
    )
}