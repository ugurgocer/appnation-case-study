import ICondition from "./ICondition";
import { IDirections } from "./IDirections";
import ITemperature from "./ITemperature";

export interface IWind {
    mph: number;
    kph: number;
    dir: IDirections
}

export interface ICurrentWeather {
    temp: ITemperature;
    humidity: number;
    cloud: number;
    feelsLike: ITemperature;
    heatIndex: ITemperature;
    precip: { mm: number, in: number };
    vis: { km: number, miles: number };
    pressure: { in: number, mb: number };
    wind: IWind;
    condition: ICondition,
    isDay: boolean,
    lastUpdatedDate: string
}