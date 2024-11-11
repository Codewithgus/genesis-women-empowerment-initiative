import { Container, Nav, Navbar } from "react-bootstrap";
import gweiIcon from "../assets/20241110_180909.jpg";

import { Link } from "react-router-dom";
import "../index.css";
import { Image, Heading } from "@chakra-ui/react";

function Navs() {
  return (
    <>
      <Heading
        fontSize={{ sm: "md", md: "lg", lg: "2xl" }}
        textAlign={"center"}
      >
        GENESIS WOMEN EMPOWERMENT INITIATIVE
      </Heading>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        // className="bg-body-tertiary"
        // bg="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src={gweiIcon} w={"60px"} h={"60px"} m={0} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-white">
            <Nav
              className="mr-auto"
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
              <Nav.Link as={Link} className="custom-class " to={"/our-program"}>
                our program
              </Nav.Link>
              <Nav.Link as={Link} className="custom-class " to={"/contact"}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"#"} className="donate-btn">
                Donate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navs;
