import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SwitchCountryFlag } from "../SwitchCountryFlag";
import { SwitchTheme } from "../SwitchTheme";
import { HeaderStyled, Menu,Tools } from "./style";

interface Props {}
export const Header = ({ ...props }: Props) => {
  const { t } = useTranslation();
  return (
    <HeaderStyled>
      <Menu>
        <li>
          <Link to="/">{t("menu.home")}</Link>
        </li>
        <li>
          <Link to="/about">{t("menu.about")}</Link>
        </li>
      </Menu>
      <Tools>
        <SwitchTheme></SwitchTheme>
        <SwitchCountryFlag></SwitchCountryFlag>
      </Tools>
    </HeaderStyled>
  );
};
