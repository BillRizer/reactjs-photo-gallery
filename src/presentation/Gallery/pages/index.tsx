import React, { useState } from "react";
import { GalleryListCustom } from "../components/GalleryListCustom";
import { GalleryListMosaic } from "../components/GalleryListPexels";
import { SearchBoxComponent } from "../components/SearchBox";
import { DividerStyled } from "../../shared/components-styled/divider";
import { useDataFromPexels } from "../hooks/data-from-pexels";
import IconGrid from "../../../assets/icons/icon-grid.svg";
import IconMosaic from "../../../assets/icons/icon-mosaic.svg";
import { Icon } from "../../shared/components/Icon";
import { PageStyled, Tools } from "./style";

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

  function submit() {
    loadGallery(searchQuery);
  }
  console.log(gallery);
  return (
    <PageStyled className={!gallery?'full':''}>
      <DividerStyled size="30px"></DividerStyled>
      <SearchBoxComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submit={submit}
      ></SearchBoxComponent>
      {gallery && (
        <Tools>
          <Icon
            size="medium"
            cursorPointer={true}
            icon={typeGallery === ETypeGallery.MOSAIC ? IconGrid : IconMosaic}
            onClick={() =>
              setTypeGallery(
                typeGallery === ETypeGallery.MOSAIC
                  ? ETypeGallery.CUSTOM
                  : ETypeGallery.MOSAIC
              )
            }
          ></Icon>
        </Tools>
      )}

      <DividerStyled size="30px"></DividerStyled>
      {typeGallery === ETypeGallery.MOSAIC && gallery && (
        <GalleryListMosaic data={gallery} />
      )}
      {typeGallery === ETypeGallery.CUSTOM && gallery && (
        <GalleryListCustom data={gallery} />
      )}
    </PageStyled>
  );
};
