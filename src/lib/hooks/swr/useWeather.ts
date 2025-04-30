import fetchWeather from "@/lib/services/fetchWeather";
import useSWR from "swr";

export default function useWeather(id: string) {
    const { data: weather, error, isLoading } = useSWR(
        id ? ['/api/weather', id] : null,
        () => fetchWeather(id)
    );

    return {
        weather,
        error,
        isLoading
    }
}