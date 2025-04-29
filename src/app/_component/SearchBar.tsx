"use client";

import React from "react";
import useDebounce from "@/lib/hooks/useDebounce";
import useSearch from "@/lib/hooks/swr/useSearch";
import LocationList from "./LocationList";
import SearchIcon from "./icons/Search";
import ILocation from "@/lib/types/ILocation";
import { useAppDispatch } from "@/lib/hooks/rtk";
import { addHistoryItem } from "@/lib/store/searchHistorySlice";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const [value, setValue] = React.useState<string>("");
    const [selected, setSelected] = React.useState<string>("");
    const router = useRouter();

    const searchValue = useDebounce<string>(value, 500);
    const { searchResult, isLoading } = useSearch(searchValue);
    const dispatch = useAppDispatch();
    
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setSelected("");
    }

    const onClickItem = (item: ILocation) => {
        dispatch(addHistoryItem(item));
        setSelected(item.name);
        setValue("");

        router.push(`${item.id}`);
    }

    return (
        <div className="relative flex flex-1 h-14 max-w-150 gap-2 p-3 item-border text-slate-700">
            <SearchIcon className="h-7 w-7 fill-slate-600" />
            <input
                className="flex-1 h-8 focus:outline-none placeholder:text-slate-600"
                value={selected || value}
                onInput={onChangeInput}
                placeholder="Search a location"
            />
            {searchResult.length && !isLoading ? (
                <LocationList
                    className="bg-white absolute item-border left-0 right-0 top-16 z-50"
                    items={searchResult}
                    isLoading={isLoading}
                    onClickItem={onClickItem}
                />
            ): ""}
        </div>
    );
}