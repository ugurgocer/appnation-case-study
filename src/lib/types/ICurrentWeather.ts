import ICondition from "./ICondition";
import { IDirections } from "./IDirections";
import ITemperature from "./ITemperature";

interface IWind {
    degree: number;
    mph: number;
    kph: number;
    dir: IDirections
}

export interface ICurrentWeather {
    temp: ITemperature;
    humidity: number;
    cloud: number;
    feelsLike: ITemperature;
    windchill: ITemperature;
    heatIndex: ITemperature;
    dewPoint: ITemperature;
    vis: { km: number, miles: number };
    pressure: { in: number, mb: number };
    wind: IWind;
    condition: ICondition
}