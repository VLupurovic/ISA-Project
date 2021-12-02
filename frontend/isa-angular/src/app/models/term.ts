import { Boat } from "./boat";

export class Term {
    id: number;
    startTime: Date;
    endTime: Date;
    reserved: boolean;
    boat: Boat;
}
