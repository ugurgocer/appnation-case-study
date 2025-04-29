import { NextResponse } from "next/server";
import ILocation from "@/lib/types/ILocation";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchValue = searchParams.get("value");

    if (!searchValue) {
      return NextResponse.json({ result: [] }, { status: 400 });
    }

    const apiKey = process.env.WEATHER_API_KEY || "";
    const apiBaseUrl = process.env.WEATHER_API_URL || "";
    const apiUrl = `${apiBaseUrl}/search.json?key=${apiKey}&q=${searchValue}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return NextResponse.json([], { status: response.status });
    }

    const result: ILocation[] = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}
