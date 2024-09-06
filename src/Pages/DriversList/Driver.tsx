import { useState } from "react";
import Address from "../../models/Address";
import { Col, Container, Form, FormLabel, Row } from "react-bootstrap";

export default function Driver() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState<Address>({
    streetName: " ",
    streetNumber: 0,
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  return (
    <Container>
      <Form>
        <h3> Add New Members</h3>
        <Row>
          <Col>
            <FormLabel> Unique ID </FormLabel>
            <Form.Control
              type="number"
              required
              title="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></Form.Control>
          </Col>
          <Col>
            <FormLabel> Contact Info</FormLabel>
            <Form.Control
              type="number"
              required
              title="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></Form.Control>
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
            <FormLabel> Street Name </FormLabel>
            <Form.Control
              type="text"
              required
              title="Street Name"
              value={address.streetName}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            ></Form.Control>
          </Col>
          <Col>
            <FormLabel> Street Number </FormLabel>
            <Form.Control
              type="text"
              required
              title="Street Name"
              value={address.streetName}
              onChange={(e) =>
                setAddress((prevState) => ({
                  ...prevState,
                  name: e.target.value,
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
      </Form>
    </Container>
  );
}
