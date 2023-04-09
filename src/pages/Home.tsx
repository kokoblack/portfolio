import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { HomeContainer } from "../styles/Home";
import { About, Contact, Hero, NavBar, Project, TechStack } from "./index";

type theme = {
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
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
};

export const ThemeContext = createContext({} as context);

const Home = () => {
  const lightTheme = {
    primary: "#666666",
    secondary: "#42446E",
    standard: "#ffffff",
    border: "#e7ebf0",
    card: "#000",
    cardBG: "#fff",
    cardBS: 'rgba(0, 0, 0, 0.2)'
  };
  const darkTheme = {
    primary: "#A7A7A7",
    secondary: "#CCCCCC",
    standard: "#191919",
    border: "#212020",
    card: "#fff",
    cardBG: "#363636",
    cardBS: 'rgba(0, 0, 0, 0)'
  };

  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, lightTheme, darkTheme, setTheme }}>
      <ThemeProvider theme={theme}>
        <HomeContainer >
          <NavBar />
          <Hero />
          <TechStack />
          <Project />
          <About />
          <Contact />
        </HomeContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Home;
