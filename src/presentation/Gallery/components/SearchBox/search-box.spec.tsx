import {React,fireEvent,render,screen} from '../../../../global/test-imports'
import {SearchBoxComponent} from './index'
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../global/styles/theme-dark';
import { MockTheme } from '../../../../global/utils/test-wrap-theme';

 


describe("Gallery - search box component", () => {
    test('should render text search in placeholder', () => {
        render(<MockTheme><SearchBoxComponent searchQuery='' setSearchQuery={()=>{}} /></MockTheme>);
        const inputNode = screen.getByPlaceholderText(/search/i);
        expect(inputNode).toHaveAttribute("placeholder", "search")
    });
    test('should render icon image search', () => {
        render(<MockTheme><SearchBoxComponent searchQuery='' setSearchQuery={()=>{}} /></MockTheme>);
        const imageElement = screen.getByRole('img')
        expect(imageElement).toBeInTheDocument();
    });
    

});
