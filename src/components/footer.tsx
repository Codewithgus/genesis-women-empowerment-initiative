import { Container, Link, Stack } from "@chakra-ui/react";
import { BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";
// import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container>
        <Stack direction={"row"} justifyContent={"center"} gap={5} pb={2}>
          <Link p={1} href="#">
            <BsFacebook size={40} color="white" />
          </Link>
          <Link href="#">
            <BsTwitterX size={40} color="white" />
          </Link>
          <Link href="#">
            <BsLinkedin size={40} color="white" />
          </Link>
        </Stack>
        <Stack direction={"row"} justifyContent={"center"}>
          call us <Link href="tel:+1 952-210-1536"> +1 952-210-1536</Link>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
