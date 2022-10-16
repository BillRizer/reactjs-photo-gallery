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
  setPageNumber: any;
}

export const PaginationComponent = ({
  amount,
  perPage,
  currentPage,
  setPageNumber,
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

  const handleSetPageNumber = (pageNumber:number) =>{
    setPageNumber(pageNumber)
    setInnerCurrentPage(pageNumber);
  }
  const handleNextPage = () => {
    if(innerCurrentPage<totalPages){
      const next:number=innerCurrentPage+1
      setInnerCurrentPage(next)
      setPageNumber(next)
    }
  }
  const handlePrevPage = () => {
    if(innerCurrentPage>1){
      const prev:number=innerCurrentPage-1
      setInnerCurrentPage(prev)
      setPageNumber(prev)
    }
  }
  return (
    
    <ContainerStyled>
      <>
        <Button {...PropsDefault} data-testid="first" icon={FiChevronsLeft} disabled={innerCurrentPage===1}  onClick={()=>{setInnerCurrentPage(1)}}></Button>
        <Button {...PropsDefault} data-testid="prev"  icon={FiChevronLeft} disabled={innerCurrentPage===1}  onClick={handlePrevPage}></Button>
        {[...Array(totalPages)].map((page, index) => {
          const _index = index + 1;

          return (
            <Button
              label={_index.toString()}
              key={_index}
              data-testid="page-number"
              theme={innerCurrentPage === _index ? "primary" : "default"}
              onClick={() => {
                handleSetPageNumber(_index);
              }}
            />
          );
        })}

        <Button {...PropsDefault} data-testid="next" icon={FiChevronRight} disabled={innerCurrentPage===totalPages} onClick={handleNextPage}/>
        <Button {...PropsDefault} data-testid="last" icon={FiChevronsRight} disabled={innerCurrentPage===totalPages} onClick={()=>{setInnerCurrentPage(totalPages)}}/>
      </>
    </ContainerStyled>
  );
};
