import { Box, Button, Container, Heading, Input, Text } from "@chakra-ui/react";
import Footer from "./footer";
import Navs from "./nav-bar";

const Contact = () => {
  return (
    <>
      <Navs />
      <Container fluid p={50} mb={5}>
        <Box
          shadow="md"
          borderRadius="md"
          borderWidth="1px"
          borderColor="border.disabled"
          color="fg.disabled"
          p={10}
        >
          <Heading textAlign={"center"} mb={10}>
            PLEASE FILL IN THE FORM
          </Heading>
          <Text>FIRSTNAME:</Text>
          <Input type="text" mb={5} />
          <Text>LASTNAME:</Text>

          <Input type="text" mb={5} />
          <Text>EMAIL:</Text>

          <Input type="email" mb={10} />

          <Button borderRadius={5} bg={"green"} variant={"surface"} p={5}>
            submit
          </Button>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;
