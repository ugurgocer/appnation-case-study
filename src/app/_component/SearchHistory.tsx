"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks/rtk";
import ILocation from "@/lib/types/ILocation";
import HistoryIcon from "./icons/History";
import LocationList from "./LocationList";
import React from "react";
import { loadLocalStorage } from "@/lib/store/searchHistorySlice";

export default function SearchHistory() {
    const historyItems: ILocation[] = useAppSelector((state) => state.searchHistory.items);
    const dispatch = useAppDispatch();
    
    React.useEffect(() => {
        dispatch(loadLocalStorage());
    }, []);

    return (
        <div className="py-5 h-full">
            <h3 className="bg-white flex gap-2 items-center text-slate-600 font-semibold text-xl p-4 rounded-t-md"><HistoryIcon className="w-5 h-5 fill-slate-600" /> Search History</h3>
            <LocationList
                items={historyItems}
                className="rounded-b-md min-h-70"
                onClickItem={i => console.log(i)}
            />
        </div>
    ); 
}