import { useState } from "react";
import TruckList from "../../models/TruckList";

interface VehicleCatalogue {
  truck: TruckList[];
}

const VehicleList = () => {
  const [vehicle] = useState<VehicleCatalogue>({
    truck: [],
  });
  return (
    <>
      <h2> Vehicle Inventory</h2>
      {vehicle.truck.map((truck, index) => (
        <li key={index}>
          {truck.name} - {truck.make}- {truck.model}
        </li>
      ))}
    </>
  );
};
export default VehicleList;
