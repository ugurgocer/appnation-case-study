"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks/rtk";
import ILocation from "@/lib/types/ILocation";
import HistoryIcon from "./icons/History";
import LocationList from "./LocationList";
import React from "react";
import { loadLocalStorage } from "@/lib/store/searchHistorySlice";

export default function SearchHistory() {
    const historyItems: ILocation[] = useAppSelector((state) => state.searchHistory.items);
    const popoverRef = React.useRef<HTMLDivElement>(null);

    const [visible, setVisible] = React.useState<boolean>(false);
    const dispatch = useAppDispatch();
    
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            setVisible(false);
          }
        }
    
        if (visible) {
          window.addEventListener('mousedown', handleClickOutside);
        } else {
          window.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          window.removeEventListener('mousedown', handleClickOutside);
        };
      }, [visible]);

      const toggleVisible = () => {
        setVisible(prev => !prev);
      }

    React.useEffect(() => {
        dispatch(loadLocalStorage());
    }, []);

    return (
        <div ref={popoverRef} className="relative h-14 w-14">
            <button
                className="item-border focus:outline-none cursor-pointer h-14 w-14"
                onClick={toggleVisible}
            >
                <HistoryIcon className="w-5 h-5 fill-slate-600 mx-auto"/>
            </button>
            {visible ? (
                <div className="absolute z-50 top-16 item-border w-80">
                    <h3 className="bg-white flex gap-2 items-center text-slate-600 font-semibold text-xl p-4 rounded-t-xl">
                        <HistoryIcon className="w-5 h-5 fill-slate-600" /> Search History
                    </h3>
                    <LocationList
                        items={historyItems}
                        className="rounded-b-md min-h-70"
                        onClickItem={i => console.log(i)}
                    />
                </div>
            ) : ""}
        </div>
    ); 
}