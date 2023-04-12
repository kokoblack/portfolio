import {
  NavContainer,
  NavIcon,
  NavIconContainer,
  NavIconFlex,
  NavLink,
  NavLinkFlex,
  NavMenu,
  NavTheme,
  ToggleMenu,
  ToggleNavIcon,
  ToggleNavTheme,
  Div,
} from "../styles/NavBar";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { HiOutlineMenuAlt3, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import { Flex, MoveLeft, MoveRight } from "../styles/Global";
import { ThemeContext } from "./Home";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";

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
  const { setTheme, darkTheme, lightTheme } = navContext;

  const [menu, toggleMenu] = useState(false);
  const [light, toggleLight] = useState(true);

  const onButtonClick = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    // <ThemeProvider theme={theme}>
    <NavContainer menu={menu}>
      <MoveLeft>
        <Logo gradient={true} />
      </MoveLeft>

      {link.map((text) => (
        <NavLinkFlex key={text.href}>
          <NavLink href={text.href}>{text.link}</NavLink>
        </NavLinkFlex>
      ))}

      {/* <NavIconFlex>
        {icons.map((icons, ind) => (
          <NavIcon key={ind}>{icons}</NavIcon>
        ))}
      </NavIconFlex> */}

      <NavTheme auto onClick={onButtonClick}>Download CV</NavTheme>

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

      <ToggleMenu>
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
                    <ToggleNavTheme onClick={onButtonClick}>Download CV</ToggleNavTheme>
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
