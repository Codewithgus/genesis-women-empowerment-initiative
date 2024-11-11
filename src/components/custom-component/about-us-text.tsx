import { Text } from "@chakra-ui/react";

import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const AboutText = ({ children }: props) => {
  return (
    <>
      <Text
        fontWeight={"medium"}
        // width={{
        //   md: "72ch",
        //   lg: "100ch",
        // }}
        // width={"50ch"}
        m={{ lg: "50px" }}
        lineHeight={1.5}
        wordSpacing={"2px"}
      >
        {children}
      </Text>
    </>
  );
};

export default AboutText;
