import ILocation from "./ILocation";
import { ICurrentWeather } from "./ICurrentWeather";
import { IForecastDay } from "./IForecastDay";

export default interface IWeather {
    location: ILocation;
    current: ICurrentWeather;
    forecast: IForecastDay;
}