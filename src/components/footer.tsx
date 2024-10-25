import { Container, Link, Stack } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container>
        <Stack direction={"row"} justifyContent={"center"} gap={5}>
          <Link p={1} href="#">
            <BsFacebook size={40} color="white" />
          </Link>
          <Link href="mailto:gusgayflor2001@gmail.com">
            <FaEnvelope size={40} color="white" />
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
