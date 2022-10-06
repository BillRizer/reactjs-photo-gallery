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
const MaskStyled = styled.div`
  
`;
export const NotFoundPage = () => {
  const {t} = useTranslation()
  return (
    <NotFoundStyled>
      <DividerStyled size="40px"></DividerStyled>
      <h1>{t('notfound.notfound')}</h1>
      <p>{t('notfound.buy_coffe')}</p>
      <MaskStyled>
        <img src={ImgConfusedLost} alt="" />
      </MaskStyled>
    </NotFoundStyled>
  );
};
