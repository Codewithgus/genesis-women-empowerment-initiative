import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Boxcontainer from "./custom-component/box-container";

const Statement = () => {
  return (
    <>
      <Flex direction={{ base: "column", lg: "row" }} gap={5} p={10}>
        <Box bg="green" borderRadius="md">
          <Boxcontainer>
            <Heading textTransform={"capitalize"}>mission</Heading>
            <Text fontWeight={"medium"}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              voluptatibus assumenda, numquam non iure voluptatem commodi soluta
              exercitationem? Excepturi fugit quod nemo repellendus! Nemo, illo?
              Tempora facere est excepturi beatae.
            </Text>
          </Boxcontainer>
        </Box>

        <Box bg="green.800" borderRadius="md">
          <Boxcontainer>
            <Heading textTransform={"capitalize"}>vision</Heading>
            <Text fontWeight={"medium"}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              voluptatibus assumenda, numquam non iure voluptatem commodi soluta
              exercitationem? Excepturi fugit quod nemo repellendus! Nemo, illo?
              Tempora facere est excepturi beatae.
            </Text>
          </Boxcontainer>
        </Box>
        <Box bg="green.600" borderRadius="md">
          <Boxcontainer>
            <Heading textTransform={"capitalize"}>core values</Heading>
            <Text fontWeight={"medium"}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              voluptatibus assumenda, numquam non iure voluptatem commodi soluta
              exercitationem? Excepturi fugit quod nemo repellendus! Nemo, illo?
              Tempora facere est excepturi beatae.
            </Text>
          </Boxcontainer>
        </Box>
      </Flex>
    </>
  );
};

export default Statement;
