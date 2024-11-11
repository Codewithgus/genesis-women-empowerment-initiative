import { Box, Container, Flex, List } from "@chakra-ui/react";
import AboutText from "./custom-component/about-us-text";
import Boxcontainer from "./custom-component/box-container";
import AboutHeading from "./custom-component/about-us-heading";
import Navs from "./nav-bar";
import Footer from "./footer";
import { LuCheckCircle } from "react-icons/lu";

const Program = () => {
  return (
    <>
      <Navs />
      <Container mb={5}>
        <Flex direction={"column"} gap={5} p={10}>
          <Boxcontainer>
            <Box bg={"blue.300"} p={4} mb={4} textAlign={"center"}>
              <AboutHeading>our programs</AboutHeading>
            </Box>
            <AboutText>
              At genesis women empowerment initiative we have well-chosen an
              impactful and innovative programs specialized to the distintive
              needs of women in Liberia,Guinea, and Cameroon.
              <List.Root gap={5} variant={"plain"} mt={4}>
                <List.Item>
                  <List.Indicator asChild color={"blue"}>
                    <LuCheckCircle />
                  </List.Indicator>
                  Empowering - making women stronger and gaining more confident
                  to regain their strength and hope.
                </List.Item>

                <List.Item>
                  <List.Indicator asChild color={"blue"}>
                    <LuCheckCircle />
                  </List.Indicator>
                  Innovation - workshops that introduce women to skills,self
                  reliance and future employment.
                </List.Item>
                <List.Item>
                  <List.Indicator asChild color={"blue"}>
                    <LuCheckCircle />
                  </List.Indicator>
                  Agricultural - making women responsible to feeding their
                  family and helping their family and helping their nation to
                  grow subsistence crops.
                </List.Item>
                <List.Item>
                  <List.Indicator asChild color={"blue"}>
                    <LuCheckCircle />
                  </List.Indicator>
                  microloans - solicifying some amount of currency for small
                  businesses by impoverished women.
                </List.Item>
                <List.Item>
                  <List.Indicator asChild color={"blue"}>
                    <LuCheckCircle />
                  </List.Indicator>
                  computer literacy - engaging in educative measures
                  collaborations of a supportive environment for women.
                </List.Item>
              </List.Root>
            </AboutText>
          </Boxcontainer>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Program;
