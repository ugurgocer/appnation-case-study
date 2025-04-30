import { NextResponse } from "next/server";
import ILocation from "@/lib/types/ILocation";
import errorCodes from "./_errorCodes";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchValue = searchParams.get("value");

    if (!searchValue) {
      return NextResponse.json({ message: errorCodes[1002] }, { status: 400 });
    }

    const apiKey = process.env.WEATHER_API_KEY || "";
    const apiBaseUrl = process.env.WEATHER_API_URL || "";
    const apiUrl = `${apiBaseUrl}/search.json?key=${apiKey}&q=${searchValue}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      const { error }: { error: { code: number } } = await response.json()
      return NextResponse.json({ message: errorCodes[error.code] }, { status: response.status });
    }

    const result: ILocation[] = await response.json();

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ message: errorCodes[1000] }, { status: 500 });
  }
}
