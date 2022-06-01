import { Commodity } from "./commodity";
import { Term } from "./term";

export class Boat {
    id: number;
    name: string;
    location: string;
    description: string;
    averageRating: number;
    commodities: Commodity[];
    terms: Term[];
    boatOwnerId: number;
}
