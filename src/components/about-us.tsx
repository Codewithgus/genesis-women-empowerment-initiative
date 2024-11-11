import { Flex, List } from "@chakra-ui/react";
import Team from "./team-members";
import Footer from "./footer";
import Boxcontainer from "./custom-component/box-container";
import AboutHeading from "./custom-component/about-us-heading";
import Navs from "./nav-bar";
import AboutText from "./custom-component/about-us-text";
import { LuCheckCircle } from "react-icons/lu";

const About = () => {
  return (
    <>
      <Navs />
      <Flex
        // direction={{ base: "column", lg: "row" }}
        direction={"column"}
        gap={5}
        p={10}
      >
        <Boxcontainer>
          <AboutHeading>ABOUT US</AboutHeading>
          <AboutText>
            Genesis women empowerment initiative(GWEI) is a beacon of new life
            situated in africa mainly Cameroon, Liberia, and Guinea. this
            organization is established by Vivien Kamara. our organization is at
            the advantage of enhancing the lives of women and also widows in
            those three countries. ensuring every woman has a great and
            impactful future. we will provide essential services to help women
            regain their strength and hope.
          </AboutText>
        </Boxcontainer>
        <Boxcontainer>
          <AboutHeading>core values</AboutHeading>
          <AboutText>
            {" "}
            <List.Root gap={5} variant={"plain"}>
              <List.Item>
                <List.Indicator asChild color={"blue"}>
                  <LuCheckCircle />
                </List.Indicator>
                INTEGRITY = having strong moral principles and being honest.
                ensuring that every decision is transparent in every aspect of
                our work.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color={"blue"}>
                  <LuCheckCircle />
                </List.Indicator>
                CREATIVITY = we are devoted to making every woman productive and
                should have a sense of great idea with the level of progression
                by being innovative.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color={"blue"}>
                  <LuCheckCircle />
                </List.Indicator>
                RESPECT = we believe that all women should be elicited by their
                abilities,qualities or achievements due to the regard for the
                rights or traditon of others.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color={"blue"}>
                  <LuCheckCircle />
                </List.Indicator>
                ACCOUNTABILITY = women should be responsible to justify their
                actions or decisions and be explicable to authority.
              </List.Item>
              <List.Item>
                <List.Indicator asChild color={"blue"}>
                  <LuCheckCircle />
                </List.Indicator>
                PASSION = all women should have a strong liking or desire for
                some of the activities.
              </List.Item>
            </List.Root>
          </AboutText>
        </Boxcontainer>
        {/* <Boxcontainer>
          <AboutHeading>vision</AboutHeading>
          <AboutText>
            {" "}
            our vision is to facilitate the active involvement in
            business,learning,community life,innovation and to enhance their
            roles in development
          </AboutText>
        </Boxcontainer> */}
      </Flex>
      <Team />

      <Footer />
    </>
  );
};

export default About;
