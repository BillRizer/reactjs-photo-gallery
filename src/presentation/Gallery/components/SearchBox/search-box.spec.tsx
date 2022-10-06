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

    test('should disable button when input is empty', () => {
        render(<MockTheme><SearchBoxComponent searchQuery='' setSearchQuery={()=>{}} /></MockTheme>);
        const buttonNode = screen.getByRole("button");
        expect(buttonNode).toHaveAttribute("disabled","")
    });

    test('should not disable button when input has text', () => {
        render(<MockTheme><SearchBoxComponent searchQuery='abc' setSearchQuery={()=>{}} /></MockTheme>);

        const buttonNode = screen.getByRole("button");
        
        expect(buttonNode).not.toHaveAttribute("disabled","")
    });

    test('should call change func when typing', () => {
        const props = {
            setSearchQuery: jest.fn(),
            searchQuery:''
        }
        render(<MockTheme><SearchBoxComponent {...props} /></MockTheme>);
        const inputNode = screen.getByTestId('input')

        fireEvent.change(inputNode,{target:{value:'1'}})
        fireEvent.change(inputNode,{target:{value:'12'}})
        
        expect(props.setSearchQuery).toBeCalledTimes(2)
    });

});
