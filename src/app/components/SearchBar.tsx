"use client";

import React from "react";
import useDebounce from "@/hooks/useDebounce";
import useSearch from "@/hooks/swr/useSearch";
import LocationList from "./LocationList";
import SearchIcon from "@/app/components/icons/Search";

export default function SearchBar() {
    const [value, setValue] = React.useState<string>("");
    const searchValue = useDebounce<string>(value, 500);
    const { searchResult, isLoading } = useSearch(searchValue);
    
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <div className="relative flex h-14 gap-2 p-3 item-border">
            <SearchIcon className="h-7 w-7 fill-slate-600" />
            <input
                className="flex-1 h-8 focus:outline-none"
                value={value}
                onChange={onChangeInput}
                placeholder="Search a location"
            />
            {searchResult.length && !isLoading ? (
                <LocationList
                    className="bg-white absolute item-border left-0 right-0 top-16"
                    items={searchResult}
                    isLoading={isLoading}
                />
            ): ""}
        </div>
    );
}