import React from "react";
import { Container } from "./style";
interface Props {}
export const SwitchTheme = ({ ...props }: Props) => {
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
      <button onClick={() => toggleTheme()}>Theme</button>
    </Container>
  );
};
