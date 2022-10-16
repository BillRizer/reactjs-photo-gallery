import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./style";
interface Props {}
export const SwitchTheme = ({ ...props }: Props) => {
  const currentTheme = window.localStorage.getItem("theme");
  const {t} = useTranslation()
  
  const toggleTheme = () => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const setMode = (mode: any) => {
    window.localStorage.setItem("theme", mode);
  };

  return (
    <Container>
      <button onClick={() => toggleTheme()}>{currentTheme === "light"?t('use_dark_theme'):t('use_light_theme')}</button>
    </Container>
  );
};
