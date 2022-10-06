import React, { useState } from "react";
import { GalleryListCustom } from "../components/GalleryListCustom";
import { GalleryListMosaic } from "../components/GalleryListPexels";
import { SearchBoxComponent } from "../components/SearchBox";
import { DividerStyled } from "../../shared/components-styled/divider";
import { useDataFromPexels } from "../hooks/data-from-pexels";
import IconGrid from "../../../assets/icons/icon-grid.svg";
import IconMosaic from "../../../assets/icons/icon-mosaic.svg";
import { Icon } from "../../shared/components/Icon";

enum ETypeGallery {
  MOSAIC = "MOSAIC",
  CUSTOM = "CUSTOM",
}

export const GalleryPage = () => {
  const [typeGallery, setTypeGallery] = useState<ETypeGallery>(
    ETypeGallery.CUSTOM
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { gallery, loadGallery } = useDataFromPexels();

  console.log(gallery);
  return (
    <div>
      <DividerStyled size="30px"></DividerStyled>
      <SearchBoxComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      ></SearchBoxComponent>

      <Icon
        size="medium"
        cursorPointer={true}
        icon={typeGallery === ETypeGallery.MOSAIC ? IconMosaic : IconGrid}
        onClick={() =>
          setTypeGallery(
            typeGallery === ETypeGallery.MOSAIC
              ? ETypeGallery.CUSTOM
              : ETypeGallery.MOSAIC
          )
        }
      ></Icon>

      <button onClick={() => loadGallery()}>LOAD</button>

      <DividerStyled size="30px"></DividerStyled>
      
      {typeGallery === ETypeGallery.MOSAIC && gallery && (
        <GalleryListMosaic data={gallery} />
      )}
      {typeGallery === ETypeGallery.CUSTOM && gallery && (
        <GalleryListCustom data={gallery} />
      )}
    </div>
  );
};
