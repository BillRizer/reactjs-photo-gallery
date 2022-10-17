import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import AppProvider from "./presentation/shared/hooks";

import { RoutesComponent } from "./application/router";
import {themeDark} from "./global/styles/theme-dark";
import {themeLight} from "./global/styles/theme-light";
import "./global/styles/global.css";
import "./i18n";
import { CustomThemeProvider } from "./application/hooks/themes";

const App = () => {
  const themeMode =
    window?.localStorage?.getItem("theme") === "light" ? themeLight : themeDark;
  return (
    <>
      <CustomThemeProvider>
        <AppProvider>
          <RoutesComponent></RoutesComponent>
        </AppProvider>
      </CustomThemeProvider>
    </>
  );
};

export default App;
