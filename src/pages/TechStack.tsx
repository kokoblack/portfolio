import {
  TSContainer,
  TSHeader,
  TSIcon,
  TSIconContainer,
  TSText,
} from "../styles/TechStack";
import { motion } from "framer-motion";
import { icons } from "../components/Icons";
import { updateActive } from "../components/updateActive";
import { useRef } from "react";

const TechStack = () => {
  const myRef = useRef<HTMLDivElement>(null!);
  updateActive(2, myRef);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <TSContainer id="TechStack" ref={myRef}>
        <TSHeader>My Tech Stack</TSHeader>
        <TSText> Technologies I’ve been working with recently</TSText>
        <TSIconContainer>
          {icons.map((icon, id) => (
            <motion.div
              key={id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: icon.delay }}
              viewport={{ once: true }}
            >
              <TSIcon color={icon.color}>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: -10,
                    transition: { duration: 0.5 },
                  }}
                >
                  {icon.icon}
                </motion.div>
              </TSIcon>
            </motion.div>
          ))}
        </TSIconContainer>
      </TSContainer>
    </motion.div>
  );
};

export default TechStack;
