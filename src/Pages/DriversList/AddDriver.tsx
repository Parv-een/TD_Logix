import { useState } from "react";
import Address from "../../models/Address";
import {
  Button,
  Col,
  Container,
  Form,
  FormLabel,
  Nav,
  Row,
} from "react-bootstrap";
import { RiArrowGoBackLine } from "react-icons/ri";
import Driverlist from "../../models/DriverList";

export default function AddDriver() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [address, setAddress] = useState<Address>({
    streetName: " ",
    streetNumber: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const onHandlePhoneNumber = (e: { target: { value: string } }) => {
    const phoneNumber = e.target.value;
    const phoneNumberRegex = /^\d{10}$/;
    if (phoneNumberRegex.test(phoneNumber)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    console.log(e.target.value);
    setPhoneNumber(phoneNumber);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newDriver: Driverlist = {
      id,
      firstName,
      lastName,
      dateOfBirth: new Date(dateOfBirth),
      email,
      phoneNumber,
      address: [address],
    };
    console.log(newDriver);
  };
  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <Nav.Link href="/driver">
          <RiArrowGoBackLine /> Go Back
        </Nav.Link>
        <h3> Add New Members</h3>
        <Row>
          <Col>
            <FormLabel> Unique ID </FormLabel>
            <Form.Control
              type="text"
              required
              title="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></Form.Control>
          </Col>
          <Col>
            <div>
              <FormLabel> Contact Info</FormLabel>
              <Form.Control
                type="tel"
                required
                title="Phone Number"
                value={phoneNumber}
                onChange={onHandlePhoneNumber}
              ></Form.Control>
              {isValid ? "" : <p>Phone Number must be exactly 10 digits</p>}
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormLabel> First Name </FormLabel>
            <Form.Control
              type="text"
              required
              title="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Col>
          <Col>
            <FormLabel> Last Name </FormLabel>
            <Form.Control
              type="text"
              required
              title="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormLabel> Date Of Birth </FormLabel>
            <Form.Control
              type="date"
              required
              title="Date Of Birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            ></Form.Control>
          </Col>
          <Col>
            <FormLabel> Email </FormLabel>
            <Form.Control
              type="email"
              required
              title="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormLabel> Street Number</FormLabel>
            <Form.Control
              type="text"
              required
              title="Street Number"
              value={address.streetNumber}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  streetNumber: e.target.value,
                }))
              }
            ></Form.Control>
          </Col>
          <Col>
            <FormLabel> Street Name </FormLabel>
            <Form.Control
              type="text"
              required
              title="Street Name"
              value={address.streetName}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  streetName: e.target.value,
                }))
              }
            ></Form.Control>
          </Col>
          <Col>
            <FormLabel> City </FormLabel>
            <Form.Control
              type="text"
              required
              title="City"
              value={address.city}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  city: e.target.value,
                }))
              }
            ></Form.Control>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormLabel> State </FormLabel>
            <Form.Control
              type="text"
              required
              title="State"
              value={address.state}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  state: e.target.value,
                }))
              }
            ></Form.Control>
          </Col>
          <Col>
            <FormLabel> Postal Code</FormLabel>
            <Form.Control
              type="text"
              required
              title="Postal Code"
              value={address.zip}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  zip: e.target.value,
                }))
              }
            ></Form.Control>
          </Col>
          <Col>
            <FormLabel> Country </FormLabel>
            <Form.Control
              type="text"
              required
              title="Country"
              value={address.country}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  country: e.target.value,
                }))
              }
            ></Form.Control>
          </Col>
        </Row>

        <Button type="submit"> Add to the List</Button>
      </Form>
    </Container>
  );
}
