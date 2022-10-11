import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ImgNotAllowed from "../../assets/img/not-allowed.gif";
import { DividerStyled } from "../shared/components-styled/divider";

export const NotAllowedPage= ()=> {
  const NotAllowedStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
`;
const ImgStyled = styled.img`
  max-width: 500px;
    border-radius: 3px;
    box-shadow: 0px 1px 7px 0px #aaa;
`;
const {t} = useTranslation()
  return (
    <NotAllowedStyled>
    <DividerStyled size="40px"></DividerStyled>
    <h1>{t('notallowed.notallowed')}</h1>
    <p>{t('notallowed.buy_coffe')}</p>
    <div >
      <ImgStyled style={{maxWidth:"500px"}} src={ImgNotAllowed} alt="" />
    </div>
  </NotAllowedStyled>
  );
}

