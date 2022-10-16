import { FiCheck } from "react-icons/fi";
import {
    React,
    fireEvent,
    render,
    screen,
    MountEnv,
  } from "../../../../global/test-imports";
import { IconComponent } from "./index";

describe('Icon Shared Component', () => {

    test('Should render icon', () => {
        render(MountEnv(<IconComponent Icon={FiCheck} size="small" ></IconComponent>))

        const icon = screen.getByTestId('icon');

        expect(icon).toBeInTheDocument()
    });
});