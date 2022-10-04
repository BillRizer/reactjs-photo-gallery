import React from "react";
import { ThemeProvider } from "styled-components";

import { RoutesComponent } from "./application/router";
import theme from "./global/styles/theme";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <RoutesComponent></RoutesComponent>
    </ThemeProvider>
      
    </>
  );
}

export default App;
