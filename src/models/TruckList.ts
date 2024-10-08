export default interface TruckList {
    id: number | string;
    name:string;
    make:string;
    model:string;
    price: string;
    status:string;
    description?: string;
    image: string;
}