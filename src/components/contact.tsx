import {
  Button,
  Container,
  Fieldset,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Footer from "./footer";
import Navs from "./nav-bar";
import { useEffect, useState } from "react";
import { Field } from "../components/ui/field";
const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Buttondisable, setButtonDisable] = useState(true);

  useEffect(() => {
    setButtonDisable(
      // (firstname === "" && lastname === "") || (email === "" && message === "")
      message === "" || email === "" || lastname === "" || firstname === ""
    );
  }, [message, email, lastname, firstname]);

  return (
    <>
      <Navs />
      <Container fluid p={50} mb={5}>
        <Fieldset.Root
        // size={"lg"}
        // maxW={"md"}
        >
          <Stack>
            <Fieldset.Legend
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              textTransform={"capitalize"}
            >
              please fill in the form
            </Fieldset.Legend>
          </Stack>
          <Fieldset.Content>
            <Field label="firstname">
              <Input
                type="text"
                mb={2}
                p={5}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="firstname"
              />
              {firstname === "" && (
                <Text mb={5} color={"red"}>
                  Firstname field is empty
                </Text>
              )}
            </Field>

            <Field label="lastname">
              <Input
                type="text"
                required
                mt={5}
                p={5}
                placeholder="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {lastname === "" && (
                <Text mt={2} mb={5} color={"red"}>
                  Lastname field is empty
                </Text>
              )}
            </Field>

            <Field label="email" mt={5}>
              <Input
                type="email"
                // mt={5}
                p={5}
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {email === "" && (
                <Text mt={2} color={"red"}>
                  Email field is empty
                </Text>
              )}
            </Field>
            <Field label="message" mt={5}>
              <Textarea
                placeholder="send us message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {message === "" && (
                <Text mt={2} color={"red"}>
                  message field is empty
                </Text>
              )}
            </Field>
            <Button
              borderRadius={5}
              bg={"green"}
              variant={"surface"}
              p={5}
              mt={8}
              disabled={Buttondisable}
            >
              submit
            </Button>
          </Fieldset.Content>
        </Fieldset.Root>
      </Container>
      {/* <Container fluid p={50} mb={5}>
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
          <Input
            type="text"
            mb={2}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="firstname"
          />
          {firstname === "" && (
            <Text mb={5} color={"red"}>
              please enter firstname
            </Text>
          )}

          <Text>LASTNAME:</Text>
          <Input
            type="text"
            required
            mt={5}
            placeholder="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          {lastname === "" && (
            <Text mt={2} mb={8} color={"red"}>
              please enter lastname
            </Text>
          )}

          <Text>EMAIL:</Text>

          <Input
            type="email"
            mt={5}
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {email === "" && (
            <Text mt={2} color={"red"}>
              please enter email
            </Text>
          )} */}

      {/* <Button borderRadius={5} bg={"green"} variant={"surface"} p={5} mt={8}>
        submit
      </Button> */}
      {/* </Box> */}
      {/* </Container> */}

      <Footer />
    </>
  );
};

export default Contact;
