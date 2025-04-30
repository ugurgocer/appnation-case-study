import { IDirections } from "@/lib/types/IDirections";

export const directionNames: Record<IDirections, string> = {
  [IDirections.N]: "North",
  [IDirections.NNE]: "North-Northeast",
  [IDirections.NE]: "Northeast",
  [IDirections.ENE]: "East-Northeast",
  [IDirections.E]: "East",
  [IDirections.ESE]: "East-Southeast",
  [IDirections.SE]: "Southeast",
  [IDirections.SSE]: "South-Southeast",
  [IDirections.S]: "South",
  [IDirections.SSW]: "South-Southwest",
  [IDirections.SW]: "Southwest",
  [IDirections.WSW]: "West-Southwest",
  [IDirections.W]: "West",
  [IDirections.WNW]: "West-Northwest",
  [IDirections.NW]: "Northwest",
  [IDirections.NNW]: "North-Northwest",
};
