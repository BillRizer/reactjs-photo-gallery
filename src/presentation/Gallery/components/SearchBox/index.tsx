import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// TODO: fix this, path not working imporing e.g. 'src/assets ...'
import logoBrand from "../../../../assets/img/brand.png";
import IconSearch from "../../../../assets/icons/icon-search.svg";
import { DividerStyled } from "../../../shared/components-styled/divider";
import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";
import { Brand, Container } from "./style";
import { FcSearch } from "react-icons/fc";
import { Icon } from "../../../shared/components/Icon";
import { GroupedStyled } from "../../../shared/components-styled/grouped";

interface Props {
  searchQuery: string;
  setSearchQuery: any;
  submit: any;
}
export const SearchBoxComponent = ({
  searchQuery,
  setSearchQuery,
  submit,
  ...props
}: Props) => {
  useEffect(() => {}, []);
  const { t } = useTranslation();

  function handleSubmit() {
    submit();
  }
  return (
    <Container>
      <Brand>
        <img src={logoBrand} alt="" />
      </Brand>
      <DividerStyled size="20px"></DividerStyled>
      <GroupedStyled margin={5}>
        <Input
          type="text"
          data-testid="input"
          value={searchQuery}
          placeholder={t("search")}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <Button
        Icon={<FcSearch/>}
          data-testid="submit"
          onClick={handleSubmit}
          size="large"
          theme="primary"
          disabled={searchQuery.length > 0 ? false : true}
          label={t("search")}
        ></Button>
      </GroupedStyled>
    </Container>
  );
};
