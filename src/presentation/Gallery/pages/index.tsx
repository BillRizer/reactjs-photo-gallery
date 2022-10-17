import React, { useEffect, useState } from "react";
import { GalleryListCustom } from "../components/GalleryListCustom";
import { GalleryListMosaic } from "../components/GalleryListPexels";
import { SearchBoxComponent } from "../components/SearchBox";
import { DividerStyled } from "../../shared/components-styled/divider";
import { useDataFromPexels } from "../hooks/data-from-pexels";
import IconGrid from "../../../assets/icons/icon-grid.svg";
import IconMosaic from "../../../assets/icons/icon-mosaic.svg";
import IconTomato from "../../../assets/icons/icon-tomato.svg";
import { IconComponent } from "../../shared/components/Icon";
import { FcKey } from "react-icons/fc";
import { HashLink } from "react-router-hash-link";
import { PageStyled, Tools, Notifications, Notification } from "./style";
import { useTranslation } from "react-i18next";
import { useLoading } from "../../shared/hooks/loading";
import { Button } from "../../shared/components/Button";
import { PaginationComponent } from "../../shared/components/Pagination";
import { useModal } from "../../shared/hooks/modal";
import { Input } from "../../shared/components/Input";

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
  const { gallery, loadGallery } = useDataFromPexels();
  const [perPage, setPerPage] = useState<number>(15);
  const [page, setPage] = useState<number>(1);

  const { t } = useTranslation();
  const { showLoading, hideLoading } = useLoading();
  const { showModal } = useModal();

  const loadGalleryData = () => {
    showLoading();
    loadGallery(searchQuery, pexelsApiKey || "", page, perPage).finally(() => {
      hideLoading();
      
    });
  };

  useEffect(() => {
    gallery?.source === "mock" && MockedMessageModal()
  }, [gallery]);

  useEffect(() => {
    if (searchQuery == "") {
      return;
    }
    loadGalleryData();
  }, [page]);

  function ContainerPagination() {
    return gallery ? (
      <>
        <PaginationComponent
          amount={gallery.total_results}
          setPageNumber={setPage}
          perPage={perPage}
        />
        <select name="" id="" onChange={(e) => setPerPage(+e.target.value)}>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </>
    ) : (
      <></>
    );
  }

  function handlePexelChange(text: string) {
    localStorage.setItem("pexels-api-key", text);
    setPexelsApiKey(text);
  }

  const PexelsApiKeyComp = () => (
    <>
      <Input
        id="pexels-api"
        type="text"
        onChange={(e) => {
          handlePexelChange(e.target.value);
        }}
        defaultValue={pexelsApiKey}
        label={t("pexels_api_key")}
      />
    </>
  );

  const PexelsApiKeyModal = () => {
    showModal({
      header: {
        title: t("pexels_api_key"),
        icon: FcKey,
        description: t("pexels_api_desc"),
      },
      body: PexelsApiKeyComp(),
      disclaimer: t("pexels_api_discl"),
    });
  };

  const MockedMessageModal = () => {
    showModal({
      header: {
        title: t("pexels_api_key"),
        icon: IconTomato,
        description: t("common.pexels_apikey_wrong"),
      },
      disclaimer: t("common.pexels_apikey_wrong_disclaimer"),
    });
  };
 
  
  return (
    <PageStyled className={!gallery ? "full" : ""} id="#top">
      <DividerStyled size="30px"></DividerStyled>
      <SearchBoxComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        submit={loadGalleryData}
      ></SearchBoxComponent>
      <DividerStyled size="10px"></DividerStyled>
      <Button
        size="small"
        icon={FcKey}
        theme="only-text"
        label={t("gallery.change_pexels_api_key")}
        onClick={() => PexelsApiKeyModal()}
      ></Button>

      {gallery && (
        <>
          <DividerStyled size="40px"></DividerStyled>

          <Tools>
            {ContainerPagination()}
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
        </>
      )}
 
      <DividerStyled size="30px"></DividerStyled>
      {typeGallery === ETypeGallery.MOSAIC && gallery && (
        <GalleryListMosaic data={gallery} />
      )}
      {typeGallery === ETypeGallery.CUSTOM && gallery && (
        <GalleryListCustom data={gallery} />
      )}
      {gallery && (
        <>
          <DividerStyled size="40px"></DividerStyled>
          <Tools>
            {ContainerPagination()}
            <HashLink to={"#top"}>{t("back_to_top")}</HashLink>
          </Tools>
        </>
      )}
    </PageStyled>
  );
};
