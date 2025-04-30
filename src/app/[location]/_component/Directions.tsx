import { IDirections } from "@/lib/types/IDirections";
import DirectionIcon from "./icons/Direction";
import { directionNames } from "@/constants/directionNames";

export default function Directions({ direction }: { direction: IDirections }) {
    const step = 360 / 16;
    const rotate = direction*step;
    
    return (
        <div className="flex flex-col items-center gap-2 font-bold">
            <DirectionIcon
                style={{ rotate: rotate+'deg' }}
                className="fill-primary"
            />
            {directionNames[direction]}
        </div>
    )
}
  