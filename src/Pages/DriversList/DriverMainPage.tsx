import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Driverlist from "../../models/DriverList";
import { useState } from "react";

import GridList from "../../Components/GridList";
import { driverDummy } from "../../DummyData/DriverDummyData";

export default function DriverMainPage() {
  const [driver] = useState<Driverlist[]>([...driverDummy]);
  return (
    <>
      <h3> Members List</h3>

      <Row>
        {driver.length > 0 ? (
          <GridList
            items={driver}
            itemType="driver"
            renderItem={(driver) => (
              <span>
                {driver.firstName}-{driver.lastName}
              </span>
            )}
          />
        ) : (
          <p> No Product Found</p>
        )}
      </Row>
      <Col></Col>

      <Link to="/add">
        <Button type="submit">Add Members</Button>
      </Link>
    </>
  );
}
