import Address from "./Address";


export default interface Driverlist {
    firstName: string;
    lastName: string;
    id:  string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
    status?:string;
    address: Address[];
    image : string;


    
}