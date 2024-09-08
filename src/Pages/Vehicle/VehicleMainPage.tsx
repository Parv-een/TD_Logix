import { useState } from "react";
import { vehicleDummy } from "../../DummyData/VehicleDummyData";
import TruckList from "../../models/TruckList";
import GridList from "../../Components/GridList";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function VehicleMainPage() {
  const [vehicle] = useState<TruckList[]>([...vehicleDummy]);
  return (
    <>
      <h3> Vehicle Catalogue</h3>
      <Row>
        {vehicle.length > 0 ? (
          <GridList
            items={vehicle}
            itemType="vehicle"
            renderItem={(vehicle) => (
              <span>
                {vehicle.name}-{vehicle.make}-{vehicle.model}
              </span>
            )}
          />
        ) : (
          <p> No data Found</p>
        )}
      </Row>

      <Link to="/append">
        <Button type="submit">Add</Button>
      </Link>
    </>
  );
}
