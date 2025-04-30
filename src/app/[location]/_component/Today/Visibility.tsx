import { ICurrentWeather } from "@/lib/types/ICurrentWeather";
import MultipleMetricStatus from "../MultipleMetricStatus";
import VisibilityIcon from "../icons/Visibility";

export default function Visibility({ vis }: { vis: ICurrentWeather["vis"] }) {
    return (
        <div className="flex flex-col row-span-1 bg-default rounded-lg shadow-sm p-6 gap-3 justify-around">
            <h5 className="flex gap-3 items-center text-xl font-semibold pb-2">
                <VisibilityIcon className="fill-primary" />
                Visibility
            </h5>
            <MultipleMetricStatus
                data={vis}
                metrics={Object.keys(vis)}
                defaultSelected="km"
            />
        </div>
    )
}