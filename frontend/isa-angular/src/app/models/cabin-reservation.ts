export class CabinReservation {
    id: number;
    registeredUserId: number;
    cabinId: number;
    cabinTermId: number;
    cabinName: string;
    startTime: Date;
    endTime: Date;
    price: number;
}
