import { IGalleryData } from "../../../application/types/gallery.type";
import { api } from "./api";
import { ISearch } from "./dtos/get-search.dto";
import { SearchDtoToGalleryData } from "./mappers/SearchDtoToGalleryData";

const configDefault =(pexelsApiKey:string)=> {
  return {headers: {
    Authorization: `${pexelsApiKey}`,
  },
  timeout: 1000,
}
};

const resourceSearchFromApi = async (query: string,pexelsApiKey:string): Promise<ISearch|null> => {
  try {
    return (await api.get(`search?query=${query}`,configDefault(pexelsApiKey))).data
  } catch (error) {
    console.log(error);
    return null
  }
}
const resourceSearchFromMock = async (): Promise<ISearch|null> => {
  try {
    return await require('../../../_mocks/get-search-mock_query_tomatoes')
  } catch (error) {
    console.log(error);
    return null
  }
}

export const getSearchFromApi = async (query: string,pexelsApiKey:string): Promise<IGalleryData|null> => {
  try {

    let searcedData:ISearch|null = await resourceSearchFromApi(query,pexelsApiKey) 
    console.log('query', query);
    console.log('searcedData', searcedData);

    if(searcedData){
      return SearchDtoToGalleryData(searcedData);
    }
    return null
  } catch (error) {
    console.log('error',error);
    return null;
  }
};
export const getSearchFromMock = async (): Promise<IGalleryData|null> => {
  try {

    let searcedData:ISearch|null = await resourceSearchFromMock() 
    console.log('searcedData', searcedData);

    if(searcedData){
      return SearchDtoToGalleryData(searcedData);
    }
    return null
  } catch (error) {
    console.log('error',error);
    return null;
  }
};
