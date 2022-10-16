import { FiCheck } from "react-icons/fi";
import {
    React,
    fireEvent,
    render,
    screen,
    MountEnv,
  } from "../../../../global/test-imports";
import { Button } from "./index";

describe('Button Shared Component', () => {

    test('Should render button', () => {
        render(MountEnv(<Button label="my text" ></Button>))

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument()
    });

    test('Should render button with icon', () => {
        render(MountEnv(<Button label="my text" icon={FiCheck} ></Button>))

        const icon = screen.getByTestId('icon')

        expect(icon).toBeInTheDocument()
    });

    test('Should prevent onClick when disabled',()=>{
        const onClickMock = jest.fn()
        render(MountEnv(<Button label="" onClick={onClickMock} disabled/>));

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(onClickMock).toBeCalledTimes(0)
    })

    test('Should call onClick when not disabled',()=>{
        const onClickMock = jest.fn()
        render(MountEnv(<Button label="" onClick={onClickMock} disabled={false}/>));

        const button = screen.getByRole("button");
        fireEvent.click(button);
        fireEvent.click(button);

        expect(onClickMock).toBeCalledTimes(2)
    })
    

});