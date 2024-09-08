import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import FormInput from "../../Components/FormInput";
import { useState } from "react";
import TruckList from "../../models/TruckList";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function AddVehicle() {
  const [vehicle, setVehicle] = useState<TruckList>({
    name: "",
    make: "",
    model: "",
    price: 0,
    status: "",
    description: "",
  });
  return (
    <>
      <Container>
        <Nav.Link href="/trucks">
          <Nav.Link href="/trucks">
            <RiArrowGoBackLine /> Go Back
          </Nav.Link>
        </Nav.Link>
        <h3> Add Vehicle</h3>
        <Form>
          <Row>
            <Col>
              <FormInput
                title="Name"
                type="text"
                required
                value={vehicle.name}
                onChange={(e) =>
                  setVehicle((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
            <Col>
              <FormInput
                title="Make"
                type="text"
                required
                value={vehicle.make}
                onChange={(e) =>
                  setVehicle((prevState) => ({
                    ...prevState,
                    make: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormInput
                title="Model"
                type="text"
                required
                value={vehicle.model}
                onChange={(e) =>
                  setVehicle((prevState) => ({
                    ...prevState,
                    model: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
            <Col>
              <FormInput
                title="Price"
                type="number"
                required
                value={vehicle.price}
                onChange={(e) =>
                  setVehicle((prevState) => ({
                    ...prevState,
                    price: +e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
            <Col>
              <FormInput
                title="Status"
                type="text"
                required
                value={vehicle.status}
                onChange={(e) =>
                  setVehicle((prevState) => ({
                    ...prevState,
                    status: e.target.value,
                  }))
                }
              ></FormInput>
            </Col>
          </Row>
          <Row>
            <FormInput
              title="Description"
              type="text"
              required
              value={vehicle.description}
              onChange={(e) =>
                setVehicle((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }))
              }
            ></FormInput>
          </Row>
        </Form>
        <Button type="submit">Add to the list</Button>
      </Container>
    </>
  );
}
