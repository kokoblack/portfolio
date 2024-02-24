import {
  NavIconContainer,
  NavLink,
  ToggleMenu,
  ToggleNavTheme,
  Div,
} from "../styles/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { link } from "../data/link";
import { ThemeContext } from "../pages/Home";
import { useContext } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { MobileNavProps } from "../types/types";

const MobileNav = ({ menu, light, toggleLight, toggleMenu, downloadCV }: MobileNavProps) => {
  const mobileNavContext = useContext(ThemeContext);

  const { setTheme, darkTheme, lightTheme } = mobileNavContext;
  const setActive = mobileNavContext.setActive;
  const active = mobileNavContext.active;

  return (
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
              {link.map((text, id) => (
                <NavLink
                  onClick={() => {
                    setActive(id);
                    toggleMenu(false);
                  }}
                  active={active}
                  check={id}
                  key={text.href}
                  href={text.href}
                >
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
                  <ToggleNavTheme onClick={downloadCV}>
                    Download CV
                  </ToggleNavTheme>
                </motion.div>

                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <ToggleNavTheme onClick={() => toggleLight((prev) => !prev)}>
                    {light ? (
                      <HiOutlineMoon
                        onClick={() => {
                          setTheme(darkTheme);
                          toggleMenu(false);
                        }}
                      />
                    ) : (
                      <HiOutlineSun
                        onClick={() => {
                          setTheme(lightTheme);
                          toggleMenu(false);
                        }}
                      />
                    )}
                  </ToggleNavTheme>
                </motion.div>
              </NavIconContainer>
            </Div>
          </motion.div>
        )}
      </AnimatePresence>
    </ToggleMenu>
  );
};

export default MobileNav;
