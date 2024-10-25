import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

function Navs() {
  return (
    <>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        // className="bg-body-tertiary"
        // bg="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">organization name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-white">
            <Nav
              className="me-auto  "
              variant="tabs"
              fill
              defaultActiveKey={"/home"}
            >
              <Nav.Link as={Link} to={"/"} className="custom-class ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="custom-class " to={"/about"}>
                About us
              </Nav.Link>
              <Nav.Link as={Link} className="custom-class " to={"/contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navs;
