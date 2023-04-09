import {
  NavContainer,
  NavIcon,
  NavIconContainer,
  NavIconFlex,
  NavLogo,
  NavLink,
  NavLinkFlex,
  NavMenu,
  NavTheme,
  ToggleMenu,
  ToggleNavIcon,
  ToggleNavTheme,
  NavLogoText,
  Div,
} from "../styles/NavBar";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { HiOutlineMenuAlt3, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import { Flex } from "../styles/Global";
import { ThemeContext } from "./Home";
import { motion, AnimatePresence } from "framer-motion";
import { duration } from "@mui/material";

const NavBar = () => {
  const link: { link: string; href: string; delay: number }[] = [
    { link: "Home", href: "#Home", delay: 0.1 },
    { link: "About", href: "#About", delay: 0.2 },
    { link: "Tech Stack", href: "#TechStack", delay: 0.3 },
    { link: "Projects", href: "#Projects", delay: 0.4 },
    { link: "Contacts", href: "#home", delay: 0.5 },
  ];
  const icons = [<BsGithub />, <BsLinkedin />, <BsTwitter />];

  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const navContext = useContext(ThemeContext);
  const { theme, setTheme, darkTheme, lightTheme } = navContext;

  const [menu, toggleMenu] = useState(false);
  const [light, toggleLight] = useState(true);

  return (
    // <ThemeProvider theme={theme}>
    <NavContainer menu={menu}>
      <NavLogo>
        <NavLogoText>K</NavLogoText>
        <NavLogoText base=".6">Kareem</NavLogoText>
      </NavLogo>

      {link.map((text) => (
        <NavLinkFlex key={text.href}>
          <NavLink href={text.href}>{text.link}</NavLink>
        </NavLinkFlex>
      ))}

      <NavIconFlex>
        {icons.map((icons, ind) => (
          <NavIcon key={ind}>{icons}</NavIcon>
        ))}
      </NavIconFlex>

      <NavTheme onClick={() => toggleLight((prev) => !prev)}>
        {light ? (
          <HiOutlineMoon onClick={() => setTheme(darkTheme)} />
        ) : (
          <HiOutlineSun onClick={() => setTheme(lightTheme)} />
        )}
      </NavTheme>

      <NavMenu onClick={() => toggleMenu((prev) => !prev)}>
        <AnimatePresence initial={false}>
          {menu ? (
            <motion.div
              key="close"
              style={flex}
              initial={{ scale: 0.5, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
            >
              <MdClose />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              style={flex}
              initial={{ scale: 0.5, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HiOutlineMenuAlt3 />
            </motion.div>
          )}
        </AnimatePresence>
      </NavMenu>

      <ToggleMenu >
        <AnimatePresence>
          {menu && (
            <motion.div
              key="modal"
              exit={{ scale: 0, transition: { duration: 0.5 } }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Div menu={menu}>
                {link.map((text) => (
                  <NavLink key={text.href} href={text.href}>
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: text.delay }}
                    >
                      {text.link}
                    </motion.div>
                  </NavLink>
                ))}

                <NavIconContainer>
                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Flex gap="30">
                      {icons.map((icons, ind) => (
                        <ToggleNavIcon key={ind}>{icons}</ToggleNavIcon>
                      ))}
                    </Flex>
                  </motion.div>

                  <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <ToggleNavTheme
                      onClick={() => toggleLight((prev) => !prev)}
                    >
                      {light ? (
                        <HiOutlineMoon onClick={() => setTheme(darkTheme)} />
                      ) : (
                        <HiOutlineSun onClick={() => setTheme(lightTheme)} />
                      )}
                    </ToggleNavTheme>
                  </motion.div>
                </NavIconContainer>
              </Div>
            </motion.div>
          )}
        </AnimatePresence>
      </ToggleMenu>
    </NavContainer>
    // </ThemeProvider>
  );
};

export default NavBar;
