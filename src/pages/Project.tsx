import img from "../assets/rect.png";
import { BsLink45Deg } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import {
  ProjectCard,
  ProjectCardContainer,
  ProjectCardDesc,
  ProjectCardHeader,
  ProjectCardHolder,
  ProjectCardImg,
  ProjectCardLink,
  ProjectCardLinkFlex,
  ProjectCardLinkFlexContainer,
  ProjectCardStack,
  ProjectContainer,
  ProjectHeader,
  ProjectText,
} from "../styles/Project";
import { project } from "../components/Project";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <ProjectContainer>
        <ProjectHeader>Projects</ProjectHeader>
        <ProjectText>Things I've built so far</ProjectText>

        <ProjectCardContainer>
          {project.map((pro) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: pro.delay }}
              viewport={{ once: true }}
            >
              <ProjectCard key={pro.name}>
                <ProjectCardImg src={pro.image} />

                <ProjectCardHolder>
                  <ProjectCardHeader>{pro.name}</ProjectCardHeader>
                  <ProjectCardDesc>{pro.desc}</ProjectCardDesc>
                  <ProjectCardStack>
                    <span style={{ fontWeight: 600 }}>Teck Stack:</span>{" "}
                    {pro.stack}
                  </ProjectCardStack>

                  <ProjectCardLinkFlexContainer>
                    <ProjectCardLinkFlex>
                      <BsLink45Deg />
                      <ProjectCardLink href={pro.demo} target="_blank">
                        Live Preview
                      </ProjectCardLink>
                    </ProjectCardLinkFlex>

                    <ProjectCardLinkFlex left>
                      <SiGithub />
                      <ProjectCardLink href={pro.code} target="_blank">
                        View Code
                      </ProjectCardLink>
                    </ProjectCardLinkFlex>
                  </ProjectCardLinkFlexContainer>
                </ProjectCardHolder>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectCardContainer>
      </ProjectContainer>
    </motion.div>
  );
};

export default Project;
