import React, { createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import {themeDark} from '../../global/styles/theme-dark';
import {themeLight} from '../../global/styles/theme-light';

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }:any) => {
  const [theme, setTheme] = useState<DefaultTheme>(window.localStorage.getItem("theme")==='dark' ? themeDark : themeLight);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'theme-dark'){
      setTheme(themeLight);
      window.localStorage.setItem("theme","dark")
    }else{
        setTheme(themeDark);
        window.localStorage.setItem("theme","light")
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;