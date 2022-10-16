import { SwitchTheme } from ".";
import {
    React,
    fireEvent,
    render,
    screen,
    MountEnv,
  } from "../../../../global/test-imports";
  
  describe('SwitchTheme component', () => {
    const setup  = ()=>render (MountEnv(<SwitchTheme/>))
    test('Should render theme button', () => {
        setup()

        const button = screen.getByText(/use_light_theme/i)

        expect(button).toHaveTextContent(/use_light_theme/i)
    });

    test('Should change theme button when clicked', async () => {
      setup()

      const Beforebutton = screen.getByText(/use_light_theme/i)
      await fireEvent.click(Beforebutton)
      //TODO:refactor this behavior . This is UGLY but works for rerendering component
      setup()
      const Afterbutton = screen.getByText(/use_dark_theme/i)

      expect(Beforebutton).toHaveTextContent(/use_light_theme/i)
      expect(Afterbutton).toHaveTextContent(/use_dark_theme/i)
  });
   })