import { ICurrentWeather } from "@/lib/types/ICurrentWeather";
import MultipleMetricStatus from "../MultipleMetricStatus";

export default function Visibility({ vis }: { vis: ICurrentWeather["vis"] }) {
    return (
        <div className="flex flex-col row-span-1 bg-default rounded-lg shadow-sm p-6 items-center gap-3 justify-around">
            <span>Visibility</span>
            <MultipleMetricStatus
                data={vis}
                metrics={Object.keys(vis)}
                defaultSelected="km"
            />
        </div>
    )
}