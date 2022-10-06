import React from "react";
import Gallery from "react-photo-gallery";
import { IGalleryData } from "../../../../application/types/gallery.type";

interface Props {
  data: IGalleryData;
}

export const GalleryListMosaic = ({ data }: Props) => {
  return (
    <div>
      {data.photos && data.photos.length > 0 && (
        <Gallery photos={data?.photos} key={""} />
      )}
    </div>
  );
};
