import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// TODO: fix this, path not working imporing e.g. 'src/assets ...'
import logoBrand from '../../../../assets/img/brand.png';
import { DividerStyled } from "../../../shared/components-styled/divider";
import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { Brand, Container } from "./style";

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
      <Brand>
      <img src={logoBrand} alt=''/>
      </Brand>
      <DividerStyled size="20px"></DividerStyled>
      <div>
      <Input
        type="text"
        value={searchQuery}
        placeholder= {t('search')}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        />
        <Button  disabled={searchQuery.length>0?false:true} label="Go"></Button>
      
      </div>     
    </Container>
  );
};
