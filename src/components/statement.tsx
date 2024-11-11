import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Boxcontainer from "./custom-component/box-container";

const Statement = () => {
  return (
    <>
      <Flex direction={{ base: "column", lg: "row" }} gap={5} p={10}>
        <Box
          bg="blue"
          // bg="023E8A"

          // bg="green"
          borderRadius="md"
        >
          <Boxcontainer>
            <Heading textTransform={"capitalize"}>mission</Heading>
            <Text fontWeight={"medium"}>
              {" "}
              our mission is to support women achieve their full potential and a
              better future of widows in the absence of their husband.
            </Text>
          </Boxcontainer>
        </Box>

        <Box
          bg={"#023E8A"}
          //  bg="green.800"

          borderRadius="md"
        >
          <Boxcontainer>
            <Heading textTransform={"capitalize"}>vision</Heading>
            <Text fontWeight={"medium"}>
              {" "}
              our vision is to facilitate the active involvement in
              business,learning,community life,innovation and to enhance their
              roles in development.
            </Text>
          </Boxcontainer>
        </Box>
        <Box
          bg="blue.800"
          // bg="green.600"
          borderRadius="md"
        >
          <Boxcontainer>
            <Heading textTransform={"capitalize"}>GOAL</Heading>
            <Text fontWeight={"medium"}>
              our goal is to create a future where women are not only empowered
              but are also driving positive change in their communities and
              beyond.
            </Text>
          </Boxcontainer>
        </Box>
      </Flex>
    </>
  );
};

export default Statement;
