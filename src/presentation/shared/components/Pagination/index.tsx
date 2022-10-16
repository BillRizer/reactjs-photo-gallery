import React, { useState } from "react";
import { ContainerStyled } from "./style";
import { Button } from "../Button";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
interface PaginationProps {
  amount: number;
  perPage: number;
  currentPage: number;
  handleClickPageNumber: any;
}

export const PaginationComponent = ({
  amount,
  perPage,
  currentPage,
  handleClickPageNumber,
  ...props
}: PaginationProps) => {
  const [innerCurrentPage, setInnerCurrentPage] = useState(currentPage);
  let totalPages = +(amount / perPage);
  // prevent pagination missing page when have less than 1 page
  if (totalPages % 1 !== 0) {
    totalPages = +totalPages.toString().split(".", 1)[0] + 1;
  }
  const PropsDefault=({
    theme:'default' as "default",
    label:''
  })

  return (
    
    <ContainerStyled>
      <>
        <Button {...PropsDefault} data-testid="first" icon={FiChevronsLeft} disabled={innerCurrentPage===1} ></Button>
        <Button {...PropsDefault} data-testid="prev"  icon={FiChevronLeft} disabled={innerCurrentPage===1} ></Button>
        {[...Array(totalPages)].map((page, index) => {
          const _index = index + 1;

          return (
            <Button
              label={_index.toString()}
              key={_index}
              data-testid="page-number"
              theme={innerCurrentPage === _index ? "primary" : "default"}
              onClick={() => {
                handleClickPageNumber(_index);
                setInnerCurrentPage(_index);
              }}
            />
          );
        })}

        <Button {...PropsDefault} data-testid="next" icon={FiChevronRight} disabled={innerCurrentPage===totalPages?true:false}></Button>
        <Button {...PropsDefault} data-testid="last" icon={FiChevronsRight} disabled={innerCurrentPage===totalPages?true:false}></Button>
      </>
    </ContainerStyled>
  );
};
