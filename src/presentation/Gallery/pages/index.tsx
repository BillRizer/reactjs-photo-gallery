import React, { useEffect, useState } from "react";
import { GalleryListCustom } from "../components/GalleryListCustom";
import { GalleryListMosaic } from "../components/GalleryListPexels";
import { SearchBoxComponent } from "../components/SearchBox";
import { useTranslation } from "react-i18next";
import { useLoading } from "../../../application/hooks/loading";
enum ETypeGallery {
  MOSAIC = "MOSAIC",
  CUSTOM = "CUSTOM",
}
export const GalleryPage = () => {
  const [typeGallery, setTypeGallery] = useState<ETypeGallery>(
    ETypeGallery.CUSTOM
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('gallery.greetings')}</h2>
      gallery page = {searchQuery}
      <SearchBoxComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      ></SearchBoxComponent>
      <button
        onClick={() => setTypeGallery(ETypeGallery.MOSAIC)}
        disabled={typeGallery === ETypeGallery.MOSAIC}
      >
        use MOSAIC
      </button>
      <button
        onClick={() => setTypeGallery(ETypeGallery.CUSTOM)}
        disabled={typeGallery === ETypeGallery.CUSTOM}
      >
        use Custom
      </button>
      {typeGallery === ETypeGallery.MOSAIC && (
        <GalleryListMosaic/>
      )}
      {typeGallery === ETypeGallery.CUSTOM && (
        <GalleryListCustom/>
      )}
    </div>
  );
};
