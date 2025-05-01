import IWeather from "@/lib/types/IWeather";

export default async function fetchWeather(id: string) {
  if (!id.trim()) throw new Error("Please enter a location."); ;

  const response = await fetch(`/api/weather/${id}`);
  if (!response.ok) {
    const { message }: { message: string } = await response.json();
    throw new Error(message);
  }

  const { result }: { result: IWeather } = await response.json();
  if(!result) {
    throw new Error("Location not found.");
  }
  return result;
}