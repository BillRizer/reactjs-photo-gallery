import { fireEvent, MountEnv, React, render, screen } from "../../../../global/test-imports";
import { PaginationComponent } from ".";

describe("pagination Component", () => {

  test("Should render when exist less than 1 page", () => {
    render(MountEnv(<PaginationComponent amount={20} currentPage={3} perPage={5} handleClickPageNumber />));

    const pageNumber = screen.getAllByTestId("page-number");

    expect(pageNumber).toHaveLength(4);
  });

  test("Should render more one page when the remainder of the division is less than 0.5 (float)", () => {
    render(MountEnv(<PaginationComponent amount={20} currentPage={2} perPage={19} handleClickPageNumber />));

    const pageNumber = screen.getAllByTestId("page-number");

    expect(pageNumber).toHaveLength(2);
  });

  test("Should render more one page when the remainder of the division is greater than 0.5 (float)", () => {
    render(MountEnv(<PaginationComponent amount={20} currentPage={2} perPage={11} handleClickPageNumber />));

    const pageNumber = screen.getAllByTestId("page-number");
    
    expect(pageNumber).toHaveLength(2);
  });
  
  test('Should set active for current page', () => {
    render(MountEnv(<PaginationComponent amount={10} currentPage={2} perPage={3} handleClickPageNumber />));

    const currentPage = screen.getByText("2")

    expect(currentPage).toHaveClass("primary")

  });
  test('Should set active for current page out of page numbers', () => {
    render(MountEnv(<PaginationComponent amount={10} currentPage={3} perPage={5} handleClickPageNumber />));

    const currentPage = screen.queryByText("3")

    expect(currentPage).not.toBeInTheDocument()

  });

  test("Should enable 'last arrow' and 'next arrow' when page number is not max", () => {
    render(MountEnv(<PaginationComponent amount={10} currentPage={1} perPage={5} handleClickPageNumber />));

    const lastArrow  = screen.getByTestId('last')
    const nextArrow  = screen.getByTestId('next')

    expect(lastArrow).not.toHaveAttribute('disabled');
    expect(nextArrow).not.toHaveAttribute('disabled');
  })

  test("Should disabled 'last arrow' and 'next arrow' when page number is max", () => {
    render(MountEnv(<PaginationComponent amount={10} currentPage={2} perPage={5} handleClickPageNumber />));

    const lastArrow  = screen.getByTestId('last')
    const nextArrow  = screen.getByTestId('next')

    expect(lastArrow).toHaveAttribute('disabled');
    expect(nextArrow).toHaveAttribute('disabled');
  })

  test("Should enable 'first arrow' and 'prev arrow' when page number is not min", () => {
    render(MountEnv(<PaginationComponent amount={10} currentPage={2} perPage={4} handleClickPageNumber />));

    const firstArrow  = screen.getByTestId('first')
    const prevArrow  = screen.getByTestId('prev')

    expect(firstArrow).not.toHaveAttribute('disabled');
    expect(prevArrow).not.toHaveAttribute('disabled');
  })

  test("Should disabled 'first arrow' and 'prev arrow' when page number is min", () => {
    render(MountEnv(<PaginationComponent amount={10} currentPage={1} perPage={4} handleClickPageNumber />));

    const firstArrow  = screen.getByTestId('first')
    const prevArrow  = screen.getByTestId('prev')

    expect(firstArrow).toHaveAttribute('disabled');
    expect(prevArrow).toHaveAttribute('disabled');
  })
  
});
