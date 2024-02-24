import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { HomeContainer } from "../styles/Home";
import { darkTheme, lightTheme } from "../data/theme";
import { About, Contact, Hero, NavBar, Project, TechStack } from "../components/index";
import { context } from "../types/types";

export const ThemeContext = createContext({} as context);

const Home = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [active, setActive] = useState(0);

  return (
    <ThemeContext.Provider value={{ theme, active, lightTheme, darkTheme, setTheme, setActive }}>
      <ThemeProvider theme={theme}>
          <HomeContainer>
            <NavBar />
            <Hero />
            <Project />
            <TechStack />
            <About />
            <Contact />
          </HomeContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Home;
