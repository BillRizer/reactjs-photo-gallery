import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const AboutPage = () => {
  const { t } = useTranslation();

  const AboutPageStyld = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
  `;

  return (
    <AboutPageStyld>
      <h1>{t("aboutpage.title")}</h1>
    </AboutPageStyld>
  );
};
