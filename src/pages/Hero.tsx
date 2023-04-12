import {
  HeroBasis,
  HeroBR,
  HeroContainer,
  HeroImg,
  HeroText,
  HeroTextSpan,
} from "../styles/Hero";
import profile from "../assets/prof.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [s, ss] = useState(0);
  console.log(s);
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <HeroContainer id="Home" onScroll={(e) => console.log(e)}>
        <HeroBasis basis={60}>
          <HeroText>
            Hi &#128075;, <HeroBR />
            My name is <br />
            <HeroTextSpan>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Haruna Kareem.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("I'm a Frontend Developer.")
                    .start();
                }}
              />
            </HeroTextSpan>
          </HeroText>
        </HeroBasis>

        <HeroBasis basis={40}>
          <HeroImg src={profile} />
        </HeroBasis>
      </HeroContainer>
    </motion.div>
  );
};

export default Hero;
