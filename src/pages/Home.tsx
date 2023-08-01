import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { HomeContainer } from "../styles/Home";
import { About, Contact, Hero, NavBar, Project, TechStack } from "./index";

type theme = {
  primaryReverse: string;
  primary: string;
  secondary: string;
  standard: string;
  border: string;
  card: string;
  cardBG: string;
  cardBS: string;
};

type context = {
  theme: theme;
  lightTheme: theme;
  darkTheme: theme;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
};

export const ThemeContext = createContext({} as context);

const Home = () => {
  const lightTheme = {
    primaryReverse: "#A7A7A7",
    primary: "#666666",
    secondary: "#42446E",
    standard: "#ffffff",
    border: "#e7ebf0",
    card: "#000",
    cardBG: "#fff",
    cardBS: "rgba(0, 0, 0, 0.2)",
  };
  const darkTheme = {
    primaryReverse: "#666666",
    primary: "#A7A7A7",
    secondary: "#CCCCCC",
    standard: "#191919",
    border: "#212020",
    card: "#fff",
    cardBG: "#363636",
    cardBS: "rgba(0, 0, 0, 0)",
  };

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
