import React from "react";
import { ThemeProvider } from "styled-components";
import {themeDark} from "../styles/theme-dark";

export function MockTheme({ children }: any) {
  return <ThemeProvider theme={themeDark}>{children}</ThemeProvider>;
}
