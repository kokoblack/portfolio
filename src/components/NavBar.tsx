import {
  NavContainer,
  NavLink,
  NavLinkFlex,
  NavMenu,
  NavTheme,
} from "../styles/NavBar";
import { HiOutlineMenuAlt3, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import { MoveLeft } from "../styles/Global";
import { ThemeContext } from "../pages/Home";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { link } from "../data/link";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const navContext = useContext(ThemeContext);
  const { setTheme, darkTheme, lightTheme } = navContext;

  const [menu, toggleMenu] = useState(false);
  const [light, toggleLight] = useState(true);
  const setActive = navContext.setActive;
  const active = navContext.active;

  const downloadCV = () => {
    fetch("KareemCV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "KareemCV.pdf";
        alink.click();
      });
    });

    toggleMenu(false);
  };

  return (
    <NavContainer menu={menu}>
      <MoveLeft>
        <Logo gradient={true} />
      </MoveLeft>

      {link.map((text, id) => (
        <NavLinkFlex key={text.href}>
          <NavLink
            onClick={() => setActive(id)}
            active={active}
            check={id}
            href={text.href}
          >
            {text.link}
          </NavLink>
        </NavLinkFlex>
      ))}

      <NavTheme auto onClick={downloadCV}>
        Download CV
      </NavTheme>

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

      <MobileNav {...{menu, light, toggleMenu, toggleLight, downloadCV}}/>
    </NavContainer>
  );
};

export default NavBar;
