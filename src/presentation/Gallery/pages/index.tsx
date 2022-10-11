import React, { useState } from "react";
import { GalleryListCustom } from "../components/GalleryListCustom";
import { GalleryListMosaic } from "../components/GalleryListPexels";
import { SearchBoxComponent } from "../components/SearchBox";
import { DividerStyled } from "../../shared/components-styled/divider";
import { useDataFromPexels } from "../hooks/data-from-pexels";
import IconGrid from "../../../assets/icons/icon-grid.svg";
import IconMosaic from "../../../assets/icons/icon-mosaic.svg";
import { Icon } from "../../shared/components/Icon";
import { PageStyled, Tools, Notifications, Notification } from "./style";
import { useTranslation } from "react-i18next";

enum ETypeGallery {
  MOSAIC = "MOSAIC",
  CUSTOM = "CUSTOM",
}

export const GalleryPage = () => {
  const [typeGallery, setTypeGallery] = useState<ETypeGallery>(
    ETypeGallery.CUSTOM
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pexelsApiKey, setPexelsApiKey] = useState<string>("");

  const { gallery, loadGallery } = useDataFromPexels();
  const { t } = useTranslation();

  function submit() {
    loadGallery(searchQuery,pexelsApiKey);
  }
  console.log(gallery);
  return (
    <PageStyled className={!gallery ? "full" : ""}>
      <input type="text" onChange={(e)=>{setPexelsApiKey(e.target.value)}} value={pexelsApiKey} />
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
      {gallery?.source === "mock" && (
        //TODO: create component for this (ToastNotifications)
        // !!!Dont use this in input data!!!
        <Notifications >
          <Notification
            dangerouslySetInnerHTML={{
              __html: t("common.pexels_apikey_wrong", {
                interpolation: { escapeValue: false },
              }),
            }}
          />
        </Notifications>
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
