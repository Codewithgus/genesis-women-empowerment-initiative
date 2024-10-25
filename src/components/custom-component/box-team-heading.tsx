import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const BoxInnerHeading = ({ children }: props) => {
  return (
    <>
      <Heading textTransform={"capitalize"} mt={2}>
        {children}
      </Heading>
    </>
  );
};

export default BoxInnerHeading;
