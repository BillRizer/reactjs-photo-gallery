import { IGalleryData } from "../../../../application/types/gallery.type";
import { ISearch } from "../dtos/get-search.dto";


export const SearchDtoToGalleryDataMapper = (search: ISearch): IGalleryData => {
  const { page, per_page,next_page,total_results,source, photos} = search;
  
  const data: IGalleryData = {
    source:source?source:'api',
    page: page,
    per_page: per_page,
    next_page:next_page,
    total_results:total_results,
    photos: photos.map(photo =>{
      return {...photo,src:photo.src.medium}
    })
  };
  return data;
};
