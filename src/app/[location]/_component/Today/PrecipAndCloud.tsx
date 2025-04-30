import { ICurrentWeather } from "@/lib/types/ICurrentWeather";
import MultipleMetricStatus from "../MultipleMetricStatus";

export default function PrecipAndCloud({ precip, cloud }: { precip: ICurrentWeather["precip"], cloud: number }) {
    return (
        <div className="row-span-1 bg-default rounded-lg shadow-sm p-6 justify-around">
            <h5 className="text-xl font-semibold pb-2">Precipitation & Cloud</h5>
            <div className="flex justify-around">
                <div className="flex flex-1 flex-col items-center gap-3">
                    <span className="font-extralight" >Precipitation</span>
                    <MultipleMetricStatus
                        data={precip}
                        metrics={Object.keys(precip)}
                        defaultSelected="mm"
                    />
                </div>
                <div className="flex flex-1 flex-col items-center gap-3 justify-between">
                    <span className="font-extralight">Cloud</span>
                    <span className="w-fit text-center text-7xl">{cloud}<span className="text-2xl! font-light">%</span></span>
                </div>
            </div>
        </div>
    )
}