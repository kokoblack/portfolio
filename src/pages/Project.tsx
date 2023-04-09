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
import { useState } from "react";
import { project } from "../components/Project";

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectHeader>Projects</ProjectHeader>
      <ProjectText>Things I've built so far</ProjectText>

      <ProjectCardContainer>
        {project.map((pro) => (
          <ProjectCard key={pro.name}>
            <ProjectCardImg src={pro.image} />

            <ProjectCardHolder>
              <ProjectCardHeader>{pro.name}</ProjectCardHeader>
              <ProjectCardDesc>{pro.desc}</ProjectCardDesc>
              <ProjectCardStack>
                <span>Teck Stack:</span> {pro.stack}
              </ProjectCardStack>

              <ProjectCardLinkFlexContainer>
                <ProjectCardLinkFlex>
                  <BsLink45Deg />
                  <ProjectCardLink href={pro.demo} target="_blank">Live Preview</ProjectCardLink>
                </ProjectCardLinkFlex>

                <ProjectCardLinkFlex left>
                  <SiGithub />
                  <ProjectCardLink href={pro.code} target="_blank">View Code</ProjectCardLink>
                </ProjectCardLinkFlex>
              </ProjectCardLinkFlexContainer>
            </ProjectCardHolder>
          </ProjectCard>
        ))}
      </ProjectCardContainer>
    </ProjectContainer>
  );
};

export default Project;
