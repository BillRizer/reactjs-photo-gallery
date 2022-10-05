import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import AppProvider from "./application/hooks";

import { RoutesComponent } from "./application/router";
import themeDark from "./global/styles/theme-dark";
import themeLight from "./global/styles/theme-light";
import "./global/styles/global.css";
import "./i18n";

const App = () => {

  const themeMode = window?.localStorage?.getItem('theme') === 'light' ? themeLight : themeDark;
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={themeMode}>
          <RoutesComponent></RoutesComponent>
        </ThemeProvider>
      </AppProvider>
    </>
  );
};

export default App;
