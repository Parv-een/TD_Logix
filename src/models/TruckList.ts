export default interface TruckList {
    id: number | string;
    name:string;
    make:string;
    model:string;
    price: number;
    status:string;
    description?: string;
    image: string;
}