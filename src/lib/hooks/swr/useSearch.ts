import searchLocations from "@/lib/services/searchLocations";
import useSWRImmutable from "swr/immutable";
import { showToast } from "../../store/toasterSlice";
import { useAppDispatch } from "../rtk";
import ILocation from "../../types/ILocation";
import React from "react";

const fetcher = ([_, s]: [string, string]) => searchLocations(s);

export default function useSearch(searchValue: string) {
    const dispatch = useAppDispatch();
    const { data: searchResult = [], error, isLoading } = useSWRImmutable<ILocation[], Error>(
        searchValue ? ['/api/search', searchValue] : null,
        fetcher
    );

    React.useEffect(() => {
        if(error) {
            dispatch(showToast(error.message));
        }
    }, [error?.message])

    return {
        searchResult,
        error,
        isLoading
    }
}