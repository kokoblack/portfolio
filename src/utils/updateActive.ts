import { MutableRefObject, useEffect, useContext, } from "react";
import { ThemeContext } from "../pages/Home";

export const updateActive = (num: number, myRef: MutableRefObject<HTMLDivElement>) => {
    const Context = useContext(ThemeContext)
    
    const setActive = Context.setActive

    useEffect(() => {
      const handleScroll = () => {
        const { top, bottom } = myRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight && bottom >= 0) {
          setActive(num)
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
}