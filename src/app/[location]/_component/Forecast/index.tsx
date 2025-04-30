import React from "react";
import ForecastItem from "./Item";
import { IForecastDay } from "@/lib/types/IForecastDay";

export default function Forecast({ forecastDays }: { forecastDays: IForecastDay[] }) {
    return (
        forecastDays.map((forecast) => (
            <ForecastItem key={forecast.date} forecast={forecast} />
        ))
    );
  }
  