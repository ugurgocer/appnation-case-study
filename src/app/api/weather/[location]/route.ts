import { NextResponse } from "next/server";
import IWeather from "@/lib/types/IWeather";
import { IForecastDay } from "@/lib/types/IForecastDay";

export async function GET(request: Request, { params }: { params: { location: string } }) {
  try {
    const id = params.location;

    if (!id) {
      return NextResponse.json({}, { status: 400 });
    }

    const apiKey = process.env.WEATHER_API_KEY || "";
    const apiBaseUrl = process.env.WEATHER_API_URL || "";
    const apiUrl = `${apiBaseUrl}/forecast.json?key=${apiKey}&q=id:${id}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json({}, { status: response.status });
    }

    const { current, location, forecast }  = await response.json();

    const mappedForecast = forecast.forecastday.map((f: any): IForecastDay => ({
      avgTemp: { C: f.day.avgtemp_c, F: f.day.avgtemp_f },
      date: f.date,
      maxTemp: { C: f.day.maxtemp_c, F: f.day.maxtemp_f },
      minTemp: { C: f.day.mintemp_c, F: f.day.mintemp_f }
    }));

    const mappedResult: IWeather = {
      location: { ...location, id },
      current: {
        cloud: current.cloud,
        temp: { C: current.temp_c, F: current.temp_f },
        condition: current.condition,
        wind: { 
          degree: current.wind_degree,
          mph: current.wind_mph,
          kph: current.wind_kph,
          dir: current.wind_dir
        },
        dewPoint: { C: current.devpoint_c, F: current.devpoint_f },
        feelsLike: { C: current.feelslike_c, F: current.feelslike_f },
        heatIndex: { C: current.heatindex_c, F: current.heatindex_f },
        humidity: current.humidity,
        pressure: { in: current.pressure_in, mb: current.pressure_mb },
        vis: { km: current.vis_km, miles: current.vis_miles },
        windchill: { C: current.windchill_c, F: current.windchill_f },
      },
      forecast: mappedForecast
    }

    return NextResponse.json(mappedResult);
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
