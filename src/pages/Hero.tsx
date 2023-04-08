import {
  HeroBasis,
  HeroBR,
  HeroContainer,
  HeroImg,
  HeroImgContainer,
  HeroText,
  HeroTextSpan,
} from "../styles/Hero";
import profile from "../assets/prof.jpg";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBasis basis={60}>
        <HeroText>
          Hi &#128075;, <HeroBR />
          My name is <br />
          <HeroTextSpan>
            <Typewriter
            options={{loop: true}}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Haruna Kareem.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I'm a Frontend Developer.")
                  .start()
                  
              }}
            />
          </HeroTextSpan>
        </HeroText>
      </HeroBasis>

      <HeroBasis basis={40}>
        <HeroImg src={profile} />
      </HeroBasis>
    </HeroContainer>
  );
};

export default Hero;
