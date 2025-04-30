import IItemProps from "./IProps";

export default function LocationList({ items, isLoading=false, className="", onClickItem }: IItemProps) {
    if(isLoading)
        return <>Loading...</>

    return (
        <ul className={`flex bg-white flex-col divide-y-1 divide-default ${className}`}>
            {items.map((item) => (
                <li
                    key={item.id}
                    className="px-4 h-14 content-center first:rounded-t-xl last:rounded-b-xl hover:bg-default cursor-pointer"
                    onClick={() => onClickItem(item)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    )
}