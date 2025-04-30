import { IWind } from "@/lib/types/ICurrentWeather";
import Directions from "../Directions";
import MultipleMetricStatus from "../MultipleMetricStatus";
import WindIcon from "../icons/Wind";

export default function Wind({ wind }: { wind: IWind }) {
    return (
        <div className="row-span-1 bg-default rounded-lg shadow-sm p-6 justify-around">
            <h5 className="flex gap-3 items-center text-xl font-semibold pb-2">
                <WindIcon className="fill-primary" />
                Wind
            </h5>
            <div className="flex justify-around">
                <div className="flex flex-1 flex-col items-center gap-3">
                    <span className="font-extralight" >Speed</span>
                    <MultipleMetricStatus
                        data={{ kph: wind.kph, mph: wind.mph }}
                        metrics={["kph", "mph"]}
                        defaultSelected="kph"
                    />
                </div>
                <div className="flex flex-1 flex-col items-center gap-3">
                    <span className="font-extralight" >Direction</span>
                    <Directions direction={wind.dir} />
                </div>
            </div>
        </div>
    )
}