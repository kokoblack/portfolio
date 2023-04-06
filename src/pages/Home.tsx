import { HomeContainer } from "../styles/Home";
import { About, Contact, Hero, NavBar, Project, TechStack } from "./index";

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
    </HomeContainer>
  );
};

export default Home;
