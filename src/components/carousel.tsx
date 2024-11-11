import { Carousel, Image } from "react-bootstrap";
// import { Image } from "@chakra-ui/react";
import widow1 from "../assets/widow1/Widow1_bupkj3_c_scale,w_1400.jpg";
import widowSmall from "../assets/widow1/Widow1,w_200.jpg";
import widowMedium from "../assets/widow1/Widow1,w_787.jpg";
import widowLarge from "../assets/widow1/Widow1,w_1109.jpg";

import widow2 from "../assets/widow2/Widow2,w_1400.jpg";
import widow2small from "../assets/widow2/Widow2,w_200.jpg";
import widow2medium from "../assets/widow2/Widow2,w_744.jpg";
import widow2large from "../assets/widow2/Widow2,w_1134.jpg";

import widow3 from "../assets/widow3/Widow3,w_1400.jpg";
import widow3small from "../assets/widow3/Widow3,w_200.jpg";
import widow3medium from "../assets/widow3/Widow3,w_765.jpg";
import widow3large from "../assets/widow3/Widow3,w_1106.jpg";

function Carouselslide() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          srcSet={`
          ${widowSmall}   200w , ${widowMedium} 787w, ${widowLarge} 1109w
                      `}
          src={widow1}
          fluid
        />
      </Carousel.Item>

      <Carousel.Item>
        <Image
          srcSet={`
            ${widow2small}   200w , ${widow2medium} 744w, ${widow2large} 1134w
                        `}
          src={widow2}
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          srcSet={`
            ${widow3small}   200w , ${widow3medium} 765w, ${widow3large} 1106w
                        `}
          src={widow3}
          fluid
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselslide;
