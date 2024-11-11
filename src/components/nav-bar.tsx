import { Container, Nav, Navbar } from "react-bootstrap";
import gweiIcon from "../assets/20241110_180909.jpg";

import { Link } from "react-router-dom";
import "../index.css";
import { Image, Heading } from "@chakra-ui/react";

function Navs() {
  return (
    <>
      <Navbar
        expand="lg"
        // data-bs-theme="dark"
        // className="navBar"
        // className="bg-body-tertiary"
        // bg="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src={gweiIcon} w={"60px"} h={"60px"} m={0} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            // className="text-white navBar"
            // className="bg-dark"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            // className="  bg-dark "
            //  className="  text-black "
          >
            <Nav
              className="mr-auto "
              variant="tabs"
              fill
              defaultActiveKey={"/home"}
            >
              <Nav.Link
                as={Link}
                to={"/"}
                className="custom-class  navBar linkWeight"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="custom-class navBar linkWeight"
                to={"/about"}
              >
                About us
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="custom-class navBar linkWeight "
                to={"/our-program"}
              >
                our program
              </Nav.Link>
              <Nav.Link
                as={Link}
                className="custom-class navBar linkWeight"
                to={"/contact"}
              >
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={"#"} className="donate-btn custom-class">
                Donate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Heading
        fontSize={{ sm: "lg", md: "2xl", lg: "3xl" }}
        textAlign={"center"}
        fontWeight={"bolder"}
      >
        GENESIS WOMEN EMPOWERMENT INITIATIVE
      </Heading>
    </>
  );
}

export default Navs;
