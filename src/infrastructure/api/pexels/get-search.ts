import { IGalleryData } from "../../../application/types/gallery.type";
import { api } from "./api";
import { ISearch } from "./dtos/get-search.dto";
import { SearchDtoToGalleryDataMapper } from "./mappers/SearchDtoToGalleryDataMapper";

export interface IRequest{
  getSearch(query: string,pexelsApiKey:string):Promise<ISearch|null>
}

const configDefault =(pexelsApiKey:string)=> {
  return {headers: {
    Authorization: `${pexelsApiKey}`,
  },
  timeout: 1000,
}
};

export  class  getFromApi implements IRequest{
  async getSearch(query: string, pexelsApiKey: string): Promise<ISearch|null> {
    try {
      return (await api.get(`search?query=${query}`,configDefault(pexelsApiKey))).data
    } catch (error) {
      console.log(error);
      return null
    }
  }
}
export class getFromMock implements IRequest{
  async getSearch(query: string, pexelsApiKey: string): Promise<ISearch|null> {
    try {
      return await require('../../../_mocks/get-search-mock_query_tomatoes')
    } catch (error) {
      console.log(error);
      return null
    }
  }
}

export class getSearch {
  private request:IRequest

  constructor(request: IRequest) {
    this.request=request
  }
  
  public async get(query: string,pexelsApiKey:string){
    let searcedData:ISearch|null = await this.request.getSearch(query,pexelsApiKey)
    console.log('searcedData', searcedData);
    if(!searcedData){return null}

    return SearchDtoToGalleryDataMapper(searcedData);

  }

}
