import {
  TSContainer,
  TSHeader,
  TSIcon,
  TSIconContainer,
  TSText,
} from "../styles/TechStack";
import { motion } from "framer-motion";
import { icons } from "../components/Icons";

const TechStack = () => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <TSContainer>
        <TSHeader>My Tech Stack</TSHeader>
        <TSText> Technologies I’ve been working with recently</TSText>
        <TSIconContainer>
          {icons.map((icon, id) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: icon.delay }}
              viewport={{ once: true }}
            >
              <TSIcon key={id} color={icon.color}>
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
