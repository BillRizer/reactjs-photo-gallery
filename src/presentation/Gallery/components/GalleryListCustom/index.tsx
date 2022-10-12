import React from "react";
import { IGalleryData } from "../../../../application/types/gallery.type";
import { Photo, PhotoBox,PhotoMask, PhotoDesc, Photos } from "./style";

interface Props {
  data: IGalleryData;
}

export const GalleryListCustom = ({ data }: Props) => {
  return (
    <>
      {data.photos && data.photos.length > 0 && (
        <Photos>
          {data.photos.map((photo, index) => (
            <PhotoBox key={photo.id}>
              <PhotoMask>
                <Photo src={photo.src}  />
                <PhotoDesc></PhotoDesc>
              </PhotoMask>
            </PhotoBox>
          ))}
        </Photos>
      )}
    </>
  );
};
