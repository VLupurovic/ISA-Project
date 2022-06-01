export class BoatReservation {
    id: number;
    registeredUserId: number;
    boatId: number;
    boatName: string;
    boatTermId: number;
    startTime: Date;
    endTime: Date;
    price: number;
    addedCommodityIds: Array<number> = [];
}
