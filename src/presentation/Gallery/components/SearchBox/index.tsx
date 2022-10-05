import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// TODO: fix this, path not working imporing e.g. 'src/assets ...'
import IconSearch from '../../../../assets/icons/icon-search-image.svg';
import { Button } from "../../../shared/components/Button";
import { Container } from "./style";

interface Props {
  searchQuery: string;
  setSearchQuery: any;
}
export const SearchBoxComponent = ({
  searchQuery,
  setSearchQuery,
  ...props
}: Props) => {
  useEffect(() => {}, []);
  const {t} = useTranslation()
  return (
    <Container>
      <img src={IconSearch} alt=''/>
      {t('search')}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <Button label="Go"></Button>
      
    </Container>
  );
};
