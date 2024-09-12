
import httpClient from "../httpClient";
import Driverlist from "../models/DriverList";

const BASE_PATH = "/api/drivers"; 


const itemService = ({
  getAllItems: async (): Promise<Driverlist[]> => {
    try {
      const response = await httpClient.get(BASE_PATH);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  createItem: async (item: Driverlist): Promise<Driverlist> => {
    try {
      const response = await httpClient.post(BASE_PATH, item);
      return response.data;
    } catch (error) {
      console.error(error);
        return;
    }
  }
});

export default itemService;