import React, { Suspense } from "react";
import Weather from "./_component/Weather";

export default async function WeatherPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;

  return (
      <Weather id={location} />
  );
}
  