import {
  React,
  fireEvent,
  render,
  screen,
  MountEnv,
} from "../../../../global/test-imports";
import { SwitchCountryFlag } from ".";

  jest.mock('react-i18next', () => ({
    useTranslation: () => {
      return {
        t: (str:string) => str,
        i18n: {
          changeLanguage: ()=>{},
          language:'en-US',
        },
      };
    },
  }));

  describe('SwitchCountryFlag', () => {
    
    test('should render Flags', () => {
      render(MountEnv(<SwitchCountryFlag />))

      const enUS = screen.getByTestId("en-US")
      const ptBr = screen.getByTestId("pt-BR")

      expect(ptBr).toBeInTheDocument()
      expect(enUS).toBeInTheDocument()

    });
    test('should show actived class in default language', async() => {
      render(MountEnv(<SwitchCountryFlag/>))

      const defaultLang = screen.getByTestId("en-US")

      expect(defaultLang.classList).toContainEqual("actived")

    })
    //TODO: create assync test, need wait for hook action
    test.todo('should change actived class to clicked flag', );
  });