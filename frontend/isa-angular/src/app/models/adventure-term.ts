import { Adventure } from 'src/app/models/adventure';
export class AdventureTerm {
    id: number;
    adventureId: number;
    name: string;
    startTime: string;
    endTime: string;
    pricePerDay: number;
    rating: number;
    promo: boolean;
    discount: number;
}
