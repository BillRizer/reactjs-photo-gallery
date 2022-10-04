import React, { useEffect } from "react";

// TODO: fix this, path not working imporing e.g. 'src/assets ...'
import IconSearch from '../../../../assets/icons/icon-search-image.svg';
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

  return (
    <Container>
      <img src={IconSearch} alt=''/>
      search
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button>Go</button>
    </Container>
  );
};
