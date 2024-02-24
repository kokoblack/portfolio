import React from "react";

export type MobileNavProps = {
  menu: boolean;
  light: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  toggleLight: React.Dispatch<React.SetStateAction<boolean>>;
  downloadCV: () => void;
};

export type LogoProps = {
  gradient?: boolean;
  hide?: boolean;
};

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

export type context = {
  theme: theme;
  lightTheme: theme;
  darkTheme: theme;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  setTheme: React.Dispatch<React.SetStateAction<theme>>;
};
