import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ImgConfusedLost from "../../assets/img/confused-lost.gif";
import { DividerStyled } from "../shared/components-styled/divider";
const NotFoundStyled = styled.div`
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
export const NotFoundPage = () => {
  const {t} = useTranslation()
  return (
    <NotFoundStyled>
      <DividerStyled size="40px"></DividerStyled>
      <h1>{t('notfound.notfound')}</h1>
      <p>{t('notfound.buy_coffe')}</p>
      <div>
        <ImgStyled src={ImgConfusedLost} alt="" />
      </div>
    </NotFoundStyled>
  );
};
