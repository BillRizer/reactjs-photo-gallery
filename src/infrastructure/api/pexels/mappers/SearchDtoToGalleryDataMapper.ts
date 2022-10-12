import { IGalleryData } from "../../../../application/types/gallery.type";
import { ISearch } from "../dtos/get-search.dto";


export const SearchDtoToGalleryDataMapper = (search: ISearch): IGalleryData => {
  const { page, per_page, photos,source } = search;
  console.log("source",source);
  
  const data: IGalleryData = {
    source:source?source:'api',
    page: page,
    per_page: per_page,
    photos: photos.map(photo =>{
      return {...photo,src:photo.src.medium}
    })
  };
  return data;
};
