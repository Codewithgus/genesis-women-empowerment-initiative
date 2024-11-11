import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const AboutHeading = ({ children }: props) => {
  return (
    <>
      <Heading
        textTransform={"uppercase"}
        textDecoration={"underline"}
        mb={4}
        textAlign={"center"}
      >
        {children}
      </Heading>
    </>
  );
};

export default AboutHeading;
