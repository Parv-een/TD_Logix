import { Container, Nav, Navbar } from "react-bootstrap";

export default function Layout() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home">
        <img
          src="./src/assets/road-truckicon.jpg"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Road-Truck-Icon"
        />{" "}
        TD Logix
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Trucks Inventory</Nav.Link>
          <Nav.Link href="#driver">Crew Members</Nav.Link>
          <Nav.Link href="#shipment">Shipments</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#logout">Logout</Nav.Link>
          <Nav.Link eventKey={2} href="#profile">
            Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
