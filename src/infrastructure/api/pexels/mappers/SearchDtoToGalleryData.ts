import { IGalleryData } from "../../../../application/types/gallery.type";
import { ISearch } from "../dtos/get-search.dto";


export const SearchDtoToGalleryData = (search: ISearch): IGalleryData => {
  const { page, per_page, photos } = search;
  const data: IGalleryData = {
    page: page,
    per_page: per_page,
    photos: photos.map(photo =>{
      return {...photo,src:photo.src.medium}
    })
  };
  return data;
};
