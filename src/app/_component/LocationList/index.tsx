"use client";

import IItemProps from "./IProps";

export default function LocationList({ items, isLoading=false, className="", onClickItem }: IItemProps) {
    if(isLoading)
        return <>Loading...</>

    return (
        <ul className={`flex bg-white flex-col divide-y-1 divide-slate-200 ${className}`}>
            {items.map((item) => (
                <li
                    key={item.id}
                    className="px-4 h-14 content-center first:rounded-t-md last:rounded-b-md hover:bg-slate-100 text-slate-600 hover:text-slate-700 cursor-pointer"
                    onClick={() => onClickItem(item)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    )
}