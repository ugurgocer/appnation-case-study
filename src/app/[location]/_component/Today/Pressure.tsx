import { ICurrentWeather } from "@/lib/types/ICurrentWeather";
import MultipleMetricStatus from "../MultipleMetricStatus";

export default function Pressure({ pressure }: { pressure: ICurrentWeather["pressure"] }) {
    return (
        <div className="flex flex-col row-span-1 bg-default rounded-lg shadow-sm p-6 items-center gap-3 justify-around">
            <span>Pressure</span>
            <MultipleMetricStatus
                data={pressure}
                metrics={Object.keys(pressure)}
                defaultSelected="mb"
            />
        </div>
    )
}