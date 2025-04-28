import ILocation from "@/types/ILocation";

export default interface IProps {
    items: ILocation[],
    isLoading: boolean,
    className?: string
}