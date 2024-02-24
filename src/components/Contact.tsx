import Logo from "./Logo";
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
import { contactIcons } from "../data/Icons";
import { motion } from "framer-motion";
import { useRef } from "react";
import { updateActive } from "../utils/updateActive";

const Contact = () => {
  const myRef = useRef<HTMLDivElement>(null!);
  updateActive(4, myRef);

  return (
    <ContactContainer id="Contacts" ref={myRef}>
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
            {contactIcons.map((icon) => (
              <ContactIcon href={icon.link} target="_blank" key={icon.link}>
                {icon.icon}
              </ContactIcon>
            ))}
          </Flex>
        </ContactFLex>
      </motion.div>
    </ContactContainer>
  );
};

export default Contact;
