import {
  NavContainer,
  NavIcon,
  NavIconFlex,
  NavImg,
  NavLink,
  NavLinkFlex,
  NavMenu,
  NavTheme,
  ToggleMenu,
  ToggleNavTheme,
} from "../styles/NavBar";
import logo from "../assets/kareem.png";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { HiOutlineMenuAlt3, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const link: { link: string; href: string }[] = [
    { link: "Home", href: "#Home" },
    { link: "About", href: "#About" },
    { link: "Tech Stack", href: "#TechStack" },
    { link: "Projects", href: "#Projects" },
    { link: "Contacts", href: "#home" },
  ];
  const icons = [<BsGithub />, <BsLinkedin />, <BsTwitter />];

  const [menu, toggleMenu] = useState(false);

  return (
    <NavContainer>
      <NavImg src={logo} />

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

      <NavTheme>
        <HiOutlineMoon />
      </NavTheme>

      <NavMenu onClick={() => toggleMenu((prev) => !prev)}>
        {menu ? <MdClose/> : <HiOutlineMenuAlt3 />}
      </NavMenu>

      {menu && (
        <ToggleMenu>
          {link.map((text) => (
            <NavLink href={text.href}>{text.link}</NavLink>
          ))}

          <ToggleNavTheme>
            <HiOutlineMoon />
          </ToggleNavTheme>
        </ToggleMenu>
      )}
    </NavContainer>
  );
};

export default NavBar;
