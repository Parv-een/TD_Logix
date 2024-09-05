import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Navbar.Brand to="#home">
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
            <NavLink to="/trucks">Trucks Inventory</NavLink>
            <NavLink to="/driver">Crew Members</NavLink>
            <NavLink to="/shipment">Shipments</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login">Logout</NavLink>
            <NavLink eventKey={2} to="#profile">
              Profile
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
