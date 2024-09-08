export default interface TruckList {
    id: number;
    name:string;
    make:string;
    model:string;
    price: number;
    status:string;
    description?: string;
    image: string;
}