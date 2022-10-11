import {
  React,
  fireEvent,
  render,
  screen,
} from "../../../../global/test-imports";
import { SearchBoxComponent } from "./index";
import { MockTheme } from "../../../../global/utils/test-wrap-theme";

const setup = (overrides?: any) => {
  const props = {
    setSearchQuery: () => {},
    searchQuery: "",
    submit: () => {},
    ...overrides,
  };
  render(
    <MockTheme>
      <SearchBoxComponent {...props} />
    </MockTheme>
  );
};

describe("Gallery - SearchBox component", () => {
  test("should render text search in placeholder", () => {
    setup();

    const inputNode = screen.getByPlaceholderText(/search/i);
    expect(inputNode).toHaveAttribute("placeholder", "search");
  });

  test("should render icon image search", () => {
    setup();

    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  test("should disable button when input is empty", () => {
    setup();

    const buttonNode = screen.getByRole("button");
    expect(buttonNode).toHaveAttribute("disabled", "");
  });

  test("should not disable button when input has text", () => {
    setup({ searchQuery: "abc" });

    const buttonNode = screen.getByRole("button");

    expect(buttonNode).not.toHaveAttribute("disabled", "");
  });

  test("should call change func when typing", () => {
    const mock = jest.fn();
    setup({ setSearchQuery: mock });
    const inputNode = screen.getByTestId("input");

    fireEvent.change(inputNode, { target: { value: "1" } });
    fireEvent.change(inputNode, { target: { value: "12" } });

    expect(mock).toBeCalledTimes(2);
  });

  test("should call submit when button clicked", () => {
    const mock = jest.fn();
    setup({searchQuery:"Fake Search", submit: mock });
    
    const buttonNode = screen.getByTestId("submit");
    fireEvent.click(buttonNode)

    expect(mock).toBeCalledTimes(1);
  });

  test("should prevent call submit when button disabled and clicked", () => {
    const mock = jest.fn();
    setup({ submit: mock });
    
    const buttonNode = screen.getByTestId("submit");
    fireEvent.click(buttonNode)

    expect(mock).toBeCalledTimes(0);
  });


});
