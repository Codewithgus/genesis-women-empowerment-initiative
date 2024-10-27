import { Container, Nav, Navbar } from "react-bootstrap";
import { Button } from "./ui/button";
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
          <Navbar.Brand href="#home">G.W.E.I</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-white">
            <Nav
              className="mr-auto  "
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
              <Nav.Link as={Link} className="custom-class " to={"#"}>
                our program
              </Nav.Link>
              <Nav.Link as={Link} className="custom-class " to={"/contact"}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"#"} className="donate-btn">
                {/* <Button
                  ml={{ lg: 5 }}
                  bg={"green"}
                  borderRadius={5}
                  color={"white"}
                  p={{ lg: 5 }}
                > */}
                Donate
                {/* </Button> */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navs;
