import httpClient from "../httpClient";
import Driverlist from "../models/DriverList";

const BASE_PATH = "/driver";

const itemService = {
    getAllItems: async (): Promise<Driverlist[]> => {
        const response = await httpClient.get(BASE_PATH);
        return response.data;
    },
    createItem: async (item: Driverlist): Promise<Driverlist> =>  {
        const response = await httpClient.post(BASE_PATH, item);
        return response.data;
    },
    
};

export default itemService;