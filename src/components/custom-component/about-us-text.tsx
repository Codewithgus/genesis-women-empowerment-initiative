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
        width={{
          md: "72ch",
          lg: "100ch",
        }}
        lineHeight={1.7}
      >
        {children}
      </Text>
    </>
  );
};

export default AboutText;
