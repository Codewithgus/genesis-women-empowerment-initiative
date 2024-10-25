import { Flex } from "@chakra-ui/react";
import Team from "./team-members";
import Footer from "./footer";
import Boxcontainer from "./custom-component/box-container";
import AboutHeading from "./custom-component/about-us-heading";
import Navs from "./nav-bar";
import AboutText from "./custom-component/about-us-text";

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
          <AboutHeading>history</AboutHeading>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatibus assumenda, numquam non iure voluptatem commodi soluta
            exercitationem? Excepturi fugit quod nemo repellendus! Nemo, illo?
            Tempora facere est excepturi beatae.
          </AboutText>
        </Boxcontainer>
        <Boxcontainer>
          <AboutHeading>goals</AboutHeading>
          <AboutText>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatibus assumenda, numquam non iure voluptatem commodi soluta
            exercitationem? Excepturi fugit quod nemo repellendus! Nemo, illo?
            Tempora facere est excepturi beatae.
          </AboutText>
        </Boxcontainer>
        <Boxcontainer>
          <AboutHeading>core values</AboutHeading>
          <AboutText>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptatibus assumenda, numquam non iure voluptatem commodi soluta
            exercitationem? Excepturi fugit quod nemo repellendus! Nemo, illo?
            Tempora facere est excepturi beatae.
          </AboutText>
        </Boxcontainer>
      </Flex>
      <Team />

      <Footer />
    </>
  );
};

export default About;
