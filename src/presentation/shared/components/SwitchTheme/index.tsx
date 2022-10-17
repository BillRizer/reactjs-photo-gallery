import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { useTheme } from "../../../../application/hooks/themes";
import IconMoon from "../../../../assets/icons/icon-moon.svg";
import IconSun from "../../../../assets/icons/icon-sun.svg";
import { Container, MaskStyled } from "./style";

interface Props {}
export const SwitchTheme = ({ ...props }: Props) => {
  const [themeDark, setThemeDark] = useState(window.localStorage.getItem("theme")!=='dark'?true:false);
  const { toggleTheme } = useTheme();
  useEffect(() => {
    toggleTheme()
  }, [themeDark])

  return (
    <Container>
      <Switch
        checkedIcon={
          <MaskStyled>
            <img src={IconSun} alt="" />
          </MaskStyled>
        }
        uncheckedIcon={
          <MaskStyled>
            <img src={IconMoon} alt="" />
          </MaskStyled>
        }
        offColor="#004DB1"
        onChange={() => {
          setThemeDark(!themeDark);
        }}
        checked={themeDark}
      />

    </Container>
  );
};
