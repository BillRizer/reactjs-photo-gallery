import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Flag } from "./style";
import IconFlagUS from '../../../../assets/icons/icon-flag-us.svg'
import IconFlagBR from '../../../../assets/icons/icon-flag-br.svg'
interface Props {}
export const SwitchCountryFlag = ({ ...props }: Props) => {
  const { i18n } = useTranslation();
  const selectedLng = i18n.language 

  function handle(language: string) {
    if(language===selectedLng){return}
    i18n.changeLanguage(language);
  }
  
  return (
    <Container>
      <Flag onClick={() => handle("pt-BR")} src={IconFlagBR} className={selectedLng==='pt-BR'?'actived':''}></Flag>
      <Flag onClick={() => handle("en-US")} src={IconFlagUS} className={selectedLng==='en-US'?'actived':''}></Flag>
    </Container>
  );
};
