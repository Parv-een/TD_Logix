import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DriverList from "../models/DriverList";
import TruckList from "../models/TruckList";
import { vehicleDummy } from "../DummyData/VehicleDummyData";
import { driverDummy } from "../DummyData/DriverDummyData";
import { Nav } from "react-bootstrap";
import { RiArrowGoBackLine } from "react-icons/ri";

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
      const foundItem = [...vehicleDummy, ...driverDummy].find((x) => {
        const itemIdAsNumber = parseInt(itemId, 10);
        return x.id === itemIdAsNumber || x.id.toString() === itemId;
      });
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
          <p>
            Name: {item.firstName}-{item.lastName}
          </p>
          <p> Email: {item.email}</p>
          <p> PhoneNumber: {item.phoneNumber}</p>
          <p> Date Of Birth: {item.dateOfBirth.toLocaleDateString()}</p>
          <p>
            Address:{" "}
            {item.address.map((address, index) => (
              <p key={index}>
                Street Name: {address.streetName}
                <br></br>
                Street Number: {address.streetNumber}
                <br></br>City: {address.city}
                <br></br>
                State: {address.state}
                <br></br>
                Zip: {address.zip} <br></br>
                Country: {address.country}
              </p>
            ))}
          </p>
          <p>Status: {item.status}</p>
          <Nav.Link href="/driver">
            <RiArrowGoBackLine /> <b>Go Back</b>
          </Nav.Link>
        </div>
      ) : (
        <div>
          <p>Vehicle ID: {item.id}</p>
          <p>Vehicle Name: {item.name}</p>
          <p>Vehicle Make: {item.make}</p>
          <p>Vehicle Model: {item.model}</p>
          <p>Vehicle Price: {item.price}</p>
          <p>Vehicle Status: {item.status}</p>
          <p>Vehicle Description: {item.description}</p>
          <Nav.Link href="/trucks">
            <RiArrowGoBackLine /> <b>Go Back</b>
          </Nav.Link>
        </div>
      )}
    </>
  );
}
