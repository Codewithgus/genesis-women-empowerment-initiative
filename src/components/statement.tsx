import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Boxcontainer from "./custom-component/box-container";

const Statement = () => {
  return (
    <>
      <Flex direction={{ base: "column", lg: "row" }} gap={5} p={10}>
        <Box borderRadius="md">
          <Boxcontainer>
            <Box bg={"blue.300"} p={4} mb={4} textAlign={"center"}>
              <Heading textTransform={"uppercase"} fontWeight={"bold"}>
                mission
              </Heading>
            </Box>
            <Text fontWeight={"medium"} textAlign={"center"}>
              {" "}
              To support women achieve their full potential and a better future
              of widows in the absence of their husband.
            </Text>
          </Boxcontainer>
        </Box>

        <Box
          // bg={"#023E8A"}
          //  bg="green.800"

          borderRadius="md"
        >
          <Boxcontainer>
            <Box bg={"blue.300"} p={4} mb={4} textAlign={"center"}>
              <Heading textTransform={"uppercase"} fontWeight={"bold"}>
                vision
              </Heading>
            </Box>
            <Text fontWeight={"medium"} textAlign={"center"}>
              {" "}
              To facilitate the active involvement in
              business,learning,community life,innovation and to enhance their
              roles in development.
            </Text>
          </Boxcontainer>
        </Box>
        <Box
          // bg="blue.800"
          // bg="green.600"
          borderRadius="md"
        >
          <Boxcontainer>
            <Box bg={"blue.300"} p={4} mb={4} textAlign={"center"}>
              <Heading textTransform={"uppercase"} fontWeight={"bold"}>
                Goal
              </Heading>
            </Box>
            <Text fontWeight={"medium"} textAlign={"center"}>
              To create a future where women are not only empowered but are also
              driving positive change in their communities and beyond.
            </Text>
          </Boxcontainer>
        </Box>
      </Flex>
    </>
  );
};

export default Statement;
