import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Boxcontainer = ({ children }: props) => {
  return (
    <>
      <Box
        //   bg="green"
        shadow="md"
        borderRadius="md"
        borderWidth="1px"
        borderColor="border.disabled"
        color="fg.disabled"
        w={"100%"}
        p={5}
        textAlign={"center"}
      >
        {children}
      </Box>
    </>
  );
};

export default Boxcontainer;
