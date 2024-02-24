import { LogoContainer, LogoText } from "../styles/Logo";
import { LogoProps } from "../types/types";

const Logo = ({ gradient, hide }: LogoProps) => {
  return (
    <LogoContainer gradient={gradient} hide={hide}>
      <LogoText>K</LogoText>
      <LogoText base=".6">Kareem</LogoText>
    </LogoContainer>
  );
};

export default Logo;
