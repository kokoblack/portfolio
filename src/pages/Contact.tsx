import React from "react";
import Logo from "../components/Logo";
import {
  ContactContainer,
  ContactFLex,
  ContactHeader,
  ContactHeaderSpan,
  ContactIcon,
  ContactMailContainer,
  ContactText,
} from "../styles/Contact";
import { Flex } from "../styles/Global";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  const icons = [
    { icon: <BsGithub />, link: "https://github.com/kokoblack" },
    {
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/haruna-abdul-kareem-0860901b5/",
    },
    { icon: <BsTwitter />, link: "https://twitter.com/Kokoblack_tweet" },
  ];

  return (
    <ContactContainer id="Contacts">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ContactMailContainer>
          <ContactHeader>
            For any questions please mail me: <br />
            <ContactHeaderSpan>benzimakareem26@gmail.com</ContactHeaderSpan>
          </ContactHeader>
        </ContactMailContainer>

        <ContactFLex>
          <Logo gradient={false} hide={true} />

          <ContactText>+234 8083855497</ContactText>
          <ContactText>benzimakareem26@gmail.com</ContactText>

          <Flex>
            {icons.map((icons) => (
              <ContactIcon href={icons.link} target="_blank" key={icons.link}>{icons.icon}</ContactIcon>
            ))}
          </Flex>
        </ContactFLex>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;
