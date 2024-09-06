import Address from "./Address";

export default interface ShipmentList{
    id:number;
    pickupLocation: Address[];
    deliveryLocation: Address[];
    pickupDate: Date;
    deliveryDate:Date;
    pickupTime: TimeRanges;
    DeliveryTime: TimeRanges;
    duration: number | string;
    status?: string;

}