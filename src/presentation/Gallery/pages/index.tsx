import React, { useState } from "react";
import { GalleryListCustom } from "../components/GalleryListCustom";
import { GalleryListMosaic } from "../components/GalleryListPexels";
import { SearchBoxComponent } from "../components/SearchBox";
import { DividerStyled } from "../../shared/components-styled/divider";
import { useDataFromPexels } from "../hooks/data-from-pexels";
import IconGrid from "../../../assets/icons/icon-grid.svg";
import IconMosaic from "../../../assets/icons/icon-mosaic.svg";
import { IconComponent } from "../../shared/components/Icon";
import { FcKey } from "react-icons/fc";

import {
  PageStyled,
  Tools,
  Notifications,
  Notification,
  PexelApiKey,
} from "./style";
import { useTranslation } from "react-i18next";
import { useLoading } from "../../shared/hooks/loading";
import { Button } from "../../shared/components/Button";
import { Pagination } from "../../shared/components/Pagination";

enum ETypeGallery {
  MOSAIC = "MOSAIC",
  CUSTOM = "CUSTOM",
}

export const GalleryPage = () => {
  const [typeGallery, setTypeGallery] = useState<ETypeGallery>(
    ETypeGallery.CUSTOM
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pexelsApiKey, setPexelsApiKey] = useState<string | null>(
    localStorage.getItem("pexels-api-key")
  );
  const [showPexelsInput, setShowPexelsInput] = useState<boolean>(false);
  const { gallery, loadGallery } = useDataFromPexels();
  const { t } = useTranslation();
  const { showLoading, hideLoading } = useLoading();
  
  function submit() {
    
    showLoading();
    loadGallery(searchQuery, pexelsApiKey || "").finally(() => {
      hideLoading();
    });
  }

  function handleSavePexelsApiLocalStorage(key: string) {
    localStorage.setItem("pexels-api-key", key);
    setShowPexelsInput(false);
  }
 
  return (
    <PageStyled className={!gallery ? "full" : ""}>
      {showPexelsInput && (
        <PexelApiKey>
          {t("pexels_api_key")}
          <input
            type="text"
            onChange={(e) => {
              setPexelsApiKey(e.target.value);
            }}
            value={pexelsApiKey || ""}
            onBlur={(e) => handleSavePexelsApiLocalStorage(e.target.value)}
          />
        </PexelApiKey>
      )}
      <DividerStyled size="30px"></DividerStyled>
      <SearchBoxComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submit={submit}
      ></SearchBoxComponent>
 <DividerStyled size="10px"></DividerStyled>
      <Button size="small" icon={FcKey} theme="only-text" label="Change Pexels api key" onClick={() => setShowPexelsInput(!showPexelsInput)}></Button>
     
      {gallery && (
        <Tools>
          <IconComponent
            size="medium"
            cursorPointer={true}
            Icon={typeGallery === ETypeGallery.MOSAIC ? IconGrid : IconMosaic}
            onClick={() =>
              setTypeGallery(
                typeGallery === ETypeGallery.MOSAIC
                  ? ETypeGallery.CUSTOM
                  : ETypeGallery.MOSAIC
              )
            }
          ></IconComponent>
        </Tools>
      )}
      <Pagination></Pagination>
      {gallery?.source === "mock" && (
        //TODO: create component for this (ToastNotifications)
        // !!!Dont use dangerouslySetInnerHTML this in input data!!!
        <Notifications>
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
