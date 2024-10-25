import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const BoxTeamMembers = ({ children }: props) => {
  return (
    <>
      <Box
        maxWidth={"sm"}
        //   bg="green.600"
        shadow="md"
        borderRadius="md"
        borderWidth="1px"
        borderColor="border.disabled"
        color="fg.disabled"
        w={"100%"}
        //   p={5}
      >
        {children}
      </Box>
    </>
  );
};

export default BoxTeamMembers;
