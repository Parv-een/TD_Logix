import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DriverList from "../models/DriverList";
import TruckList from "../models/TruckList";
import { vehicleDummy } from "../DummyData/VehicleDummyData";
import { driverDummy } from "../DummyData/DriverDummyData";

export default function ItemDetailPage() {
  const { itemId } = useParams();
  console.log("itemId: ", itemId);
  const [item, setItem] = useState<DriverList | TruckList | undefined>(
    undefined
  );

  useEffect(() => {
    console.log("itemId:", itemId);
    console.log("typeof itemId:", typeof itemId);
    if (itemId) {
      const itemIdAsNumber = parseInt(itemId, 10);
      console.log("itemIdAsNumber:", itemIdAsNumber);
      const foundItem = [...vehicleDummy, ...driverDummy].find(
        (x) => x.id === itemIdAsNumber
      );
      console.log("foundItem:", foundItem);
      if (foundItem) {
        setItem(foundItem);
      } else {
        console.log("Item not found");
      }
    } else {
      console.log("itemId is undefined");
    }
  }, [itemId]);

  if (!item) {
    return <p>Item Not Found</p>;
  }

  return (
    <>
      <h3> {item.id}</h3>
      {"firstName" in item ? (
        <div>
          <p> Driver Name: {item.firstName}</p>
          <p> Driver Email: {item.email}</p>
          <p> Driver Phone: {item.phoneNumber}</p>
          {/* Add more properties here */}
        </div>
      ) : (
        <div>
          <p>Vehicle Make: {item.make}</p>
          <p>Vehicle Model: {item.model}</p>
          {/* Add more properties here */}
        </div>
      )}
    </>
  );
}
