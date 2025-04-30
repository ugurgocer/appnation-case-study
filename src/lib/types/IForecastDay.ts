import ICondition from "./ICondition";
import ITemperature from "./ITemperature";

export interface IForecastDay {
    date: string;
    maxTemp: ITemperature;
    minTemp: ITemperature;
    avgTemp: ITemperature;
    condition: ICondition;
}