import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const BoxTeamText = ({ children }: props) => {
  return (
    <>
      <Text fontWeight={"medium"}>{children}</Text>
    </>
  );
};

export default BoxTeamText;
