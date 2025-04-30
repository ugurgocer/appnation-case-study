import { ICurrentWeather } from "@/lib/types/ICurrentWeather";
import MultipleMetricStatus from "../MultipleMetricStatus";
import PressureIcon from "../icons/Pressure";

export default function Pressure({ pressure }: { pressure: ICurrentWeather["pressure"] }) {
    return (
        <div className="flex flex-col row-span-1 bg-default rounded-lg shadow-sm p-6 gap-3 justify-around">
            <h5 className="flex gap-3 items-center text-xl font-semibold pb-2">
                <PressureIcon className="fill-primary" />
                Pressure
            </h5>
            <MultipleMetricStatus
                data={pressure}
                metrics={Object.keys(pressure)}
                defaultSelected="mb"
            />
        </div>
    )
}