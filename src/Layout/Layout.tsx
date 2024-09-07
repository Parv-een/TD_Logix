import { Nav, Navbar } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">
          <img
            src="./src/assets/road-truckicon.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Road-Truck-Icon"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/trucks">Vehicle Catalogue</Nav.Link>
            <Nav.Link href="/driver">Crew Members</Nav.Link>
            <Nav.Link href="/shipment">Shipments</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <IoLogOutOutline />
              Logout
            </Nav.Link>
            <Nav.Link eventKey={2} href="#profile">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
}
