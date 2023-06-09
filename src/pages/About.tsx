import { RiCalendar2Line, RiBuilding4Line } from "react-icons/ri";
import { experience } from "../components/Experience";
import {
  AboutContainer,
  AboutFlex,
  AboutHeader,
  AboutMTEnd,
  AboutSmallText,
  AboutText,
  AboutButton,
  AboutHR,
  AboutMedText,
  AboutIcon,
} from "../styles/About";
import { Flex } from "../styles/Global";
import { motion } from "framer-motion";
import { useRef } from "react";
import { updateActive } from "../components/updateActive";

const About = () => {
  const myRef = useRef<HTMLDivElement>(null!);
  updateActive(3, myRef);

  return (
    <AboutContainer id="About" ref={myRef}>
      <section>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <AboutHeader>About Me</AboutHeader>
          <AboutText>
            Front-End Developer with proven experience in helping companies to
            create and maintain a better codebase for reusability. I love a lot
            about the aesthetics of coding and at most the efficiency of a
            codebase and more importantly the mobile-first approach. I am
            committed to improving organization processes, procedures and
            operational strategies. Passionate about learning and development
            and eager to tackle more complex problems and continue to find ways
            to maximize user efficiency.
          </AboutText>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <AboutHeader>Work Experience</AboutHeader>
          {experience.map((e) => (
            <div key={e.company}>
              <AboutFlex>
                <AboutMTEnd>
                  <AboutMedText>{e.role}</AboutMedText>
                  <AboutButton>{e.type}</AboutButton>
                </AboutMTEnd>

                <AboutMTEnd>
                  <Flex gap="0" content="flex-start" w>
                    <AboutIcon as="div">
                      <RiBuilding4Line />
                    </AboutIcon>

                    <AboutSmallText>{e.company}</AboutSmallText>
                  </Flex>
                  <Flex gap="0" content="flex-end" w>
                    <AboutIcon as="div">
                      <RiCalendar2Line />
                    </AboutIcon>
                    <AboutSmallText>{e.date}</AboutSmallText>
                  </Flex>
                </AboutMTEnd>
              </AboutFlex>
              <AboutHR />
            </div>
          ))}
        </motion.div>
      </section>
    </AboutContainer>
  );
};

export default About;
