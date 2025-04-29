'use client';

import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/rtk";
import { toggle } from "@/lib/store/metricSlice";


export default function MetricSwitch() {
    const selected = useAppSelector((state) => state.metric.selected);
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(toggle());
    }
    

    return (
        <div className="flex gap-2 relative">
            <button
                className={`item-border focus:outline-none cursor-pointer h-14 w-14 ${selected == 'C' ? 'selected-switch' : ''}`}
                onClick={onClick}
            >
                °C
            </button>
            <button
                className={`item-border focus:outline-none cursor-pointer h-14 w-14 ${selected == 'F' ? 'selected-switch' : ''}`}
                onClick={onClick}
            >
                °F
            </button>
        </div>
    ); 
}