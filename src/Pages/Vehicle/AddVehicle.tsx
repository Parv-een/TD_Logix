import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import FormInput from "../../Components/FormInput";
import { useState } from "react";
import TruckList from "../../models/TruckList";
import { RiArrowGoBackLine } from "react-icons/ri";
import { addVehicle, vehicleDummy } from "../../DummyData/VehicleDummyData";
import { useNavigate } from "react-router-dom";

export default function AddVehicle() {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<TruckList>({
    id: "",
    name: "",
    make: "",
    model: "",
    price: "",
    status: "",
    description: "",
    image: "",
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const newVehicle: TruckList = {
      id: String(vehicleDummy.length + 1),
      name: vehicle.name,
      make: vehicle.make,
      model: vehicle.model,
      price: vehicle.price,
      status: vehicle.status,
      image: vehicle.image,
      description: vehicle.description,
    };
    addVehicle(newVehicle);
    vehicleDummy.push(newVehicle);
    console.log(vehicleDummy);

    navigate(`trucks/${newVehicle.id}`, { replace: true });
  };
  return (
    <>
      <Container>
        <Form onSubmit={onSubmitHandler}>
          <Nav.Link href="/trucks">
            <RiArrowGoBackLine /> Go Back
          </Nav.Link>

          <h3> Add Vehicle</h3>

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
                type="text"
                required
                value={vehicle.price}
                onChange={(e) =>
                  setVehicle((prevState) => ({
                    ...prevState,
                    price: e.target.value,
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

          <Button type="submit"> Add to the list </Button>
        </Form>
      </Container>
    </>
  );
}
