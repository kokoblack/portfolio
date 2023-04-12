import Home from "./pages/Home";
import { useState, useEffect } from "react";

const App = () => {
  // const [s, ss] = useState(0);
  // console.log(s);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.scrollTop);
    console.log(event.currentTarget.offsetHeight);
    console.log("ingrinrgpi");
    console.log(event);
  };

  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     ss(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div onScroll={handleScroll}>
      {/* <button onClick={onButtonClick}>Download Cv</button> */}
      <Home />
      {/* scroll: {s} */}
    </div>
  );
};

export default App;
