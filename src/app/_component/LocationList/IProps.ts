import ILocation from "@/lib/types/ILocation";

export default interface IProps {
    items: ILocation[];
    isLoading?: boolean;
    className?: string;

    onClickItem: (item: ILocation) => void;
}