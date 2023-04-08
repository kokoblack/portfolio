import { TbBrandVscode, TbBrandCypress } from "react-icons/tb";
import {
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiBootstrap,
  SiSass,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiHtml5,
} from "react-icons/si";
import {
  TSContainer,
  TSHeader,
  TSIcon,
  TSIconContainer,
  TSText,
} from "../styles/TechStack";
import { motion } from "framer-motion";

const TechStack = () => {
  const icons = [
    { icon: <SiHtml5 />, color: "#F1662A", delay: 0.6 },
    { icon: <SiCss3 />, color: "#33A9DC", delay: 0.7 },
    { icon: <SiJavascript />, color: "#F5DE19", delay: 0.8 },
    { icon: <SiTypescript />, color: "#0065A9", delay: 0.9 },
    { icon: <SiReact />, color: "#00D8FF", delay: 1 },
    { icon: <SiRedux />, color: "#764ABC", delay: 1.1 },
    { icon: <SiNextdotjs />, color: "inherit", delay: 1.2 },
    { icon: <SiNodedotjs />, color: "#68a063", delay: 1.3 },
    { icon: <SiBootstrap />, color: "#563D7C", delay: 1.4 },
    { icon: <SiTailwindcss />, color: "#44A8B3", delay: 1.5 },
    { icon: <SiSass />, color: "#CD6799", delay: 1.6 },
    { icon: <SiGit />, color: "#DE4C36", delay: 1.7 },
    { icon: <SiGithub />, color: "inherit", delay: 1.8 },
    { icon: <TbBrandVscode />, color: "#007ACC", delay: 1.9 },
    { icon: <TbBrandCypress />, color: "inherit", delay: 2.0 },
  ];

  return (
    <motion.div
      initial={{ y: 300 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{once: true}}
    >
      <TSContainer>
        <TSHeader>My Tech Stack</TSHeader>
        <TSText> Technologies I’ve been working with recently</TSText>
        <TSIconContainer>
          {icons.map((icon, id) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: icon.delay }}
              viewport={{once: true}}
            >
              <TSIcon key={id} color={icon.color}>
                {icon.icon}
              </TSIcon>
            </motion.div>
          ))}
        </TSIconContainer>
      </TSContainer>
    </motion.div>
  );
};

export default TechStack;
