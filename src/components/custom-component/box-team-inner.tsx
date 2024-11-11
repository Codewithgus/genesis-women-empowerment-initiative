import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const BoxTeamInner = ({ children }: props) => {
  return (
    <>
      <Box
        w={"100%"}
        bg={"blue.300"}
        // bg="#023E8A"
        // bg="green.600"
        textAlign={"center"}
        p={5}
        mt={6}
      >
        {children}
      </Box>
    </>
  );
};

export default BoxTeamInner;
