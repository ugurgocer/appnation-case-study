import fetchWeather from "@/lib/services/fetchWeather";
import useSWR from "swr";
import IWeather from "@/lib/types/IWeather";
import React from "react";
import { useAppDispatch } from "../rtk";
import { showToast } from "../../store/toasterSlice";

const fetcher = async ([_, s]: [string, string]) => fetchWeather(s);

export default function useWeather(id: string) {
    const dispatch = useAppDispatch();

    const { data: weather, error, isLoading } = useSWR<IWeather, Error>(
        id ? ['/api/weather', id] : null,
        fetcher,
        {
            errorRetryCount: 3
        }
    );

    React.useEffect(() => {
        if(error) {
            dispatch(showToast(error.message));
        }
    }, [error?.message])

    return {
        weather,
        error,
        isLoading
    }
}