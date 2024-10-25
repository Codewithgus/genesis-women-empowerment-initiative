import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const AboutHeading = ({ children }: props) => {
  return (
    <>
      <Heading textTransform={"capitalize"} textDecoration={"underline"}>
        {children}
      </Heading>
    </>
  );
};

export default AboutHeading;
