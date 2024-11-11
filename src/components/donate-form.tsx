import {
  Button,
  Container,
  Fieldset,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Field } from "./ui/field";
import axios from "axios";

import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js";

const DonateForm = () => {
  const [amount, setAmount] = useState("");

  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/mail/donate/",
        amount
      );
      const client_secret = response.data;

      const result = await stripe?.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements?.getElement(CardElement)!,
        },
      });

      if (result?.error) {
        alert(`payment failed ${result.error.message}`);
      } else {
        if (result?.paymentIntent.status == "succeeded") {
          alert("donation successful");
        }
      }
    } catch (error) {
      alert(`an error occur please try again`);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
                please Donate
              </Fieldset.Legend>
            </Stack>
            <Fieldset.Content>
              <Field label="Amount" required>
                <Input
                  type="text"
                  required
                  mt={5}
                  p={5}
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min={"1"}
                />
                {amount === "" && (
                  <Text mt={2} mb={5} color={"red"}>
                    amount field is empty
                  </Text>
                )}
              </Field>

              <Field>
                <CardElement />
              </Field>

              <Button
                borderRadius={5}
                bg={"green"}
                variant={"surface"}
                p={5}
                mt={8}
                disabled={!amount}
                type="submit"
              >
                submit
              </Button>
            </Fieldset.Content>
          </Fieldset.Root>
        </Container>
      </form>
    </>
  );
};

export default DonateForm;
