import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Driverlist from "../../models/DriverList";
import { useState } from "react";

import GridList from "../../Components/GridList";

export default function DriverMainPage() {
  const [driver, setDriver] = useState<Driverlist[]>([
    {
      id: "12345",
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: new Date("1990-01-01"),
      email: "johndoe@example.com",
      phoneNumber: "1234567890",
      status: "Active",
      address: [
        {
          streetName: "Main St",
          streetNumber: "123",
          city: "Anytown",
          state: "CA",
          country: "USA",
          zip: "12345",
        },
      ],
    },
    {
      id: "67890",
      firstName: "Jane",
      lastName: "Smith",
      dateOfBirth: new Date("1995-06-15"),
      email: "janesmith@example.com",
      phoneNumber: "9876543210",
      status: "Inactive",
      address: [
        {
          streetName: "Elm St",
          streetNumber: "456",
          city: "Othertown",
          state: "NY",
          country: "USA",
          zip: "67890",
        },
      ],
    },
    {
      id: "34567",
      firstName: "Bob",
      lastName: "Johnson",
      dateOfBirth: new Date("1980-03-20"),
      email: "bobjohnson@example.com",
      phoneNumber: "5551234567",
      status: "Active",
      address: [
        {
          streetName: "Oak St",
          streetNumber: "789",
          city: "Thistown",
          state: "TX",
          country: "USA",
          zip: "34567",
        },
      ],
    },
    {
      id: "90123",
      firstName: "Alice",
      lastName: "Williams",
      dateOfBirth: new Date("1992-08-12"),
      email: "alicewilliams@example.com",
      phoneNumber: "5559012345",
      status: "Active",
      address: [
        {
          streetName: "Maple St",
          streetNumber: "901",
          city: "Thatown",
          state: "FL",
          country: "USA",
          zip: "90123",
        },
      ],
    },
    {
      id: "45678",
      firstName: "Mike",
      lastName: "Davis",
      dateOfBirth: new Date("1985-02-28"),
      email: "mikedavis@example.com",
      phoneNumber: "5554567890",
      status: "Inactive",
      address: [
        {
          streetName: "Pine St",
          streetNumber: "456",
          city: "Thisotherown",
          state: "IL",
          country: "USA",
          zip: "45678",
        },
      ],
    },
    {
      id: "11111",
      firstName: "Emily",
      lastName: "Taylor",
      dateOfBirth: new Date("1998-04-10"),
      email: "emilytaylor@example.com",
      phoneNumber: "5551111123",
      status: "Active",
      address: [
        {
          streetName: "Cedar St",
          streetNumber: "111",
          city: "Anotherown",
          state: "GA",
          country: "USA",
          zip: "11111",
        },
      ],
    },
    {
      id: "22222",
      firstName: "Sarah",
      lastName: "Lee",
      dateOfBirth: new Date("1990-09-25"),
      email: "sarahlee@example.com",
      phoneNumber: "5552222333",
      status: "Active",
      address: [
        {
          streetName: "Park Ave",
          streetNumber: "222",
          city: "Somecity",
          state: "OH",
          country: "USA",
          zip: "22222",
        },
      ],
    },
    {
      id: "33333",
      firstName: "David",
      lastName: "Hall",
      dateOfBirth: new Date("1982-01-15"),
      email: "davidhall@example.com",
      phoneNumber: "5553333444",
      status: "Inactive",
      address: [
        {
          streetName: "Lake Dr",
          streetNumber: "333",
          city: "Lakeville",
          state: "MI",
          country: "USA",
          zip: "33333",
        },
      ],
    },
    {
      id: "44444",
      firstName: "Olivia",
      lastName: "Martin",
      dateOfBirth: new Date("1996-03-22"),
      email: "oliviamartin@example.com",
      phoneNumber: "5554444555",
      status: "Active",
      address: [
        {
          streetName: "River Rd",
          streetNumber: "444",
          city: "RiverDale",
          state: "AB",
          country: "Canada",
          zip: "r5t67y",
        },
      ],
    },
  ]);
  return (
    <>
      <h3> Members List</h3>

      <Row>
        {driver.length > 0 ? (
          <GridList
            items={driver}
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
