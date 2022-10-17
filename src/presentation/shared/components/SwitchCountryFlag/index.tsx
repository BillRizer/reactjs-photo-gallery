import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Flag } from "./style";
import IconFlagUS from '../../../../assets/icons/icon-flag-us.svg'
import IconFlagBR from '../../../../assets/icons/icon-flag-br.svg'
import { t } from "i18next";

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
      <Flag data-testid="pt-BR" onClick={() => handle("pt-BR")} src={IconFlagBR} className={selectedLng==='pt-BR'?'actived':''} title={t('change_language_to_portuguese')}></Flag>
      <Flag data-testid="en-US" onClick={() => handle("en-US")} src={IconFlagUS} className={selectedLng==='en-US'?'actived':''} title={t('change_language_to_english')}></Flag>
    </Container>
  );
};
