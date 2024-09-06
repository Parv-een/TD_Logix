import Address from "./Address";

export default interface Driverlist {
    firstName: string;
    lastName: string;
    id: number | string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: number;
    status:string;
    address: Address[];


    
}