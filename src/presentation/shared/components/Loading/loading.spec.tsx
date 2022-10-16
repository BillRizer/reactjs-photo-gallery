import {
    React,
    fireEvent,
    render,
    screen,
    MountEnv,
  } from "../../../../global/test-imports";
import LoadingComponent from "./index";

describe('Loading Shared Component', () => {

    test("should render loading", () => {
        render(MountEnv(<LoadingComponent isActive={true}/>))
    
        const bg = screen.getByTestId('loading-bg')
        const brand = screen.getByTestId('loading-brand')

        expect(bg).toBeInTheDocument();
        expect(brand).toBeInTheDocument();
      });

    test("should not render loading", () => {
        render(MountEnv(<LoadingComponent isActive={false}/>))
    
        const bg = screen.queryByTestId('loading-bg')
        const brand = screen.queryByTestId('loading-brand')

        expect(bg).not.toBeInTheDocument();
        expect(brand).not.toBeInTheDocument();
      });

      
});