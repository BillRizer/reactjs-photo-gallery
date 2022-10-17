import 'styled-components';
import {themeLight} from './theme-light';

declare module "styled-components" {
    type ThemeType = typeof themeLight

    export interface DefaultTheme extends ThemeType {
       name:string
    }
}