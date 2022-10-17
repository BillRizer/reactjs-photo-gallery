import { FiCheck } from "react-icons/fi";
import {
    React,
    fireEvent,
    render,
    screen,
    MountEnv,
  } from "../../../../global/test-imports";
import { Input } from "./index";

describe('Input Shared Component', () => {

    test("should render text search in placeholder", () => {
        render(MountEnv(<Input id="a" placeholder="my placeholder"  ></Input>))
    
        const inputNode = screen.getByPlaceholderText(/my placeholder/i);

        expect(inputNode).toHaveAttribute("placeholder", "my placeholder");
      });

      test("should call change func when typing", () => {
        const mock = jest.fn();
        render(MountEnv(<Input id="a" onChange={mock}  ></Input>))
        const inputNode = screen.getByTestId("input");
    
        fireEvent.change(inputNode, { target: { value: "1" } });
        fireEvent.change(inputNode, { target: { value: "12" } });
        fireEvent.change(inputNode, { target: { value: "123" } });
    
        expect(mock).toBeCalledTimes(3);
      });
});