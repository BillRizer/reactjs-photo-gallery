import { IGalleryData } from "../../../application/types/gallery.type";
import { ISearch } from "./dtos/get-search.dto";
import { SearchDtoToGalleryData } from "./mappers/SearchDtoToGalleryData";


export const getSearch = async (query: string): Promise<IGalleryData|null> => {
  try {
    console.log('query', query);
    
    // const data: ISearch = (
    //   await axios.get("https://api.pexels.com/v1/search?query=nature", config)
    // ).data;
    const data:ISearch = require('../../../_mocks/get-search-mock_query_nature')
    return SearchDtoToGalleryData(data);
  } catch (error) {
    return null;
  }
};
