import 'styled-components';
import theme from './theme-light';

declare module "styled-components" {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {}
}