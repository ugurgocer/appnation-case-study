import { NextResponse } from "next/server";
import IWeather from "@/lib/types/IWeather";
import { IForecastDay } from "@/lib/types/IForecastDay";
import { IDirections } from "@/lib/types/IDirections";
import errorCodes from "./_errorCodes";

export async function GET(request: Request, { params }: { params: Promise<{ location: string }> }) {
  try {
    const { location: id } = await params;

    if (!id) {
      return NextResponse.json({ message: errorCodes[1003] }, { status: 400 });
    }

    const apiKey = process.env.WEATHER_API_KEY || "";
    const apiBaseUrl = process.env.WEATHER_API_URL || "";
    const apiUrl = `${apiBaseUrl}/forecast.json?key=${apiKey}&q=id:${id}&days=6`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const { error }: { error: { code: number } } = await response.json()
      return NextResponse.json({ message: errorCodes[error.code] }, { status: response.status });
    }

    const { current, location, forecast }  = await response.json();

    const mappedForecast = forecast.forecastday.slice(1).map((f: any): IForecastDay => ({
      avgTemp: { C: Math.round(f.day.avgtemp_c), F: Math.round(f.day.avgtemp_f) },
      date: f.date,
      maxTemp: { C: Math.round(f.day.maxtemp_c), F: Math.round(f.day.maxtemp_f) },
      minTemp: { C: Math.round(f.day.mintemp_c), F: Math.round(f.day.mintemp_f) },
      condition: f.day.condition
    }));

    const mappedResult: IWeather = {
      location: { ...location, id },
      current: {
        cloud: current.cloud,
        temp: { C: Math.round(current.temp_c), F: Math.round(current.temp_f) },
        condition: current.condition,
        wind: {
          mph: current.wind_mph,
          kph: current.wind_kph,
          dir: IDirections[current.wind_dir as keyof typeof IDirections]
        },
        feelsLike: { C: Math.round(current.feelslike_c), F: Math.round(current.feelslike_f) },
        heatIndex: { C: Math.round(current.heatindex_c), F: Math.round(current.heatindex_f) },
        humidity: current.humidity,
        pressure: { in: current.pressure_in, mb: current.pressure_mb },
        vis: { km: current.vis_km, miles: current.vis_miles },
        isDay: !!current.is_day,
        lastUpdatedDate: current.last_updated,
        precip: { in: current.precip_in, mm: current.precip_mm },
        
      },
      forecast: mappedForecast
    }

    return NextResponse.json({ result: mappedResult });
  } catch (error) {
    return NextResponse.json({ message: errorCodes[1000] }, { status: 500 });
  }
}
