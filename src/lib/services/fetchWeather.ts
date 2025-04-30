import IWeather from "@/lib/types/IWeather";

export default async function fetchWeather(id: string): Promise<IWeather | undefined> {
    if (!id.trim()) return;

    const response = await fetch(`/api/weather/${id}`);

    if (!response.ok) {
      throw new Error("Fetch Weather Error");
    }
  
    const data: IWeather = await response.json();

    return data;
}