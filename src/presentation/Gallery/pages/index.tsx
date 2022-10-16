import React, { useCallback, useEffect, useState } from "react";
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
import { PaginationComponent } from "../../shared/components/Pagination";

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
  const [perPage, setPerPage] = useState<number>(15);
  const [page, setPage] = useState<number>(1);

  const { t } = useTranslation();
  const { showLoading, hideLoading } = useLoading();
  
  const loadGalleryData = useCallback(
    () => {
      showLoading();
    loadGallery(searchQuery, pexelsApiKey || "",page,perPage).finally(() => {
      hideLoading();
    });
    },
    [page,perPage],
  )

  function handleSavePexelsApiLocalStorage(key: string) {
    localStorage.setItem("pexels-api-key", key);
    setShowPexelsInput(false);
  }
 
  useEffect(() => {
    loadGalleryData() 
  }, [page])
  
  // function  handleSelectPage  (pageNumber:number): void {
    
    
  //   setPage(pageNumber)
  //   console.log('page',page);
  //   setTimeout(() => {
  //     console.log('page',page);
  //     console.log('handleSelectPage',pageNumber);
  //     loadGalleryData()  
  //   }, 4000);
    
  // }
  
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
        submit={loadGalleryData}
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
      {gallery&&(
        <>
        <PaginationComponent amount={gallery.total_results}  setPageNumber={setPage} perPage={perPage} />
        <select name="" id="" onChange={(e)=>setPerPage(+e.target.value)}>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
        </>
        
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

