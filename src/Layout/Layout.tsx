import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
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
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/trucks">Vehicle Catalogue</NavLink>
            <NavLink to="/driver">Crew Members</NavLink>
            <NavLink to="/shipment">Shipments</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login">Logout</NavLink>
            <Nav.Link eventKey={2} href="#profile">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
