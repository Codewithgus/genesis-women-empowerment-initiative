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
import { FormEvent, useState } from "react";
import { Field } from "../components/ui/field";
import axios from "axios";

const apiurl = import.meta.env.VITE_APP_API_URL;

const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
  });

  const data = new FormData();
  data.append("name", formdata.name);
  data.append("subject", formdata.subject);
  data.append("message", formdata.message);
  data.append("email", formdata.email);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios
        .post(`${apiurl}/mail/send/`, data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message));
      setFormdata({ ...formdata, subject: "", message: "", email: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navs />
      <form onSubmit={handleSubmit}>
        <Container
          shadow="lg"
          borderRadius="md"
          borderWidth="2px"
          borderColor="border.disabled"
          color="fg.disabled"
          // w={"100%"}
          // p={5}
          fluid
          p={50}
          //   mb={5}
        >
          <Fieldset.Root
          // size={"lg"}
          // maxW={"md"}
          // bg={"lightblue"}
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
              <Field label="Name">
                <Input
                  type="text"
                  required
                  mt={5}
                  p={5}
                  borderWidth="3px"
                  focusRingColor={"#023E8A"}
                  placeholder="Name"
                  value={formdata.name}
                  onChange={(e) =>
                    setFormdata({ ...formdata, name: e.target.value })
                  }
                />
                {formdata.name === "" && (
                  <Text mt={2} mb={5} color={"red"}>
                    name field is empty
                  </Text>
                )}
              </Field>

              <Field label="subject" mt={5}>
                <Input
                  type="text"
                  // mt={5}
                  p={5}
                  borderWidth="3px"
                  focusRingColor={"#023E8A"}
                  placeholder="subject"
                  value={formdata.subject}
                  onChange={(e) =>
                    setFormdata({ ...formdata, subject: e.target.value })
                  }
                />

                {formdata.subject === "" && (
                  <Text mt={2} color={"red"}>
                    subject field is empty
                  </Text>
                )}
              </Field>

              <Field label="email" mt={5}>
                <Input
                  type="email"
                  // mt={5}
                  p={5}
                  borderWidth="3px"
                  focusRingColor={"#023E8A"}
                  placeholder="email"
                  value={formdata.email}
                  onChange={(e) =>
                    setFormdata({ ...formdata, email: e.target.value })
                  }
                />

                {formdata.email === "" && (
                  <Text mt={2} color={"red"}>
                    email field is empty
                  </Text>
                )}
              </Field>
              <Field label="message" mt={5}>
                <Textarea
                  placeholder="send us body"
                  borderWidth="3px"
                  focusRingColor={"#023E8A"}
                  value={formdata.message}
                  onChange={(e) =>
                    setFormdata({ ...formdata, message: e.target.value })
                  }
                />
                {formdata.message === "" && (
                  <Text mt={2} color={"red"}>
                    body field is empty
                  </Text>
                )}
              </Field>
              <Button
                borderRadius={5}
                bg={"#023E8A"}
                color={"white"}
                // bg={"green"}
                variant={"surface"}
                p={5}
                mt={8}
                disabled={
                  formdata.name === "" ||
                  formdata.subject === "" ||
                  formdata.email === "" ||
                  formdata.message === ""
                }
                type="submit"
              >
                submit
              </Button>
            </Fieldset.Content>
          </Fieldset.Root>
        </Container>
      </form>

      <Footer />
    </>
  );
};

export default Contact;
