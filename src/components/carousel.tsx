import { Carousel, Image } from "react-bootstrap";
// import { Image } from "@chakra-ui/react";
import orphan1 from "../assets/orphan1/orphan-xlg.jpg";
import orphanSmall from "../assets/orphan1/orphan-small.jpg";
import orphanMedium from "../assets/orphan1/orphan-medium.jpg";
import orphanLarge from "../assets/orphan1/orphan-lg.jpg";

import orphan2 from "../assets/orphan2/base,w_1400.jpg";
import orphan2small from "../assets/orphan2/Orphan,w_588.jpg";
import orphan2medium from "../assets/orphan2/Orphan,w_900.jpg";
import orphan2large from "../assets/orphan2/Orphan,w_1273.jpg";

import orphan3 from "../assets/orphan3/base,w_1400.jpg";
import orphan3small from "../assets/orphan3/Orphan,w_692.jpg";
import orphan3medium from "../assets/orphan3/Orphan,w_995.jpg";

function Carouselslide() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          srcSet={`
          ${orphanSmall}   400w , ${orphanMedium} 800w, ${orphanLarge} 1200w
                      `}
          src={orphan1}
          fluid
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          srcSet={`
            ${orphan2small}   400w , ${orphan2medium} 800w, ${orphan2large} 1200w
                        `}
          src={orphan2}
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          srcSet={`
            ${orphan3small}   400w , ${orphan3medium} 800w, ${orphan3} 1200w
                        `}
          src={orphan3}
          fluid
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselslide;
