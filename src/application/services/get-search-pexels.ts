import {
  getFromApi,
  getFromMock,
  getSearch,
} from "../../infrastructure/api/pexels/get-search";
import { IGalleryData } from "../types/gallery.type";

export const getSearchPexels = async (
  query: string,
  pexelsApiKey: string
): Promise<IGalleryData | null> => {
  
  const fromApi = new getSearch(new getFromApi());
  const dataApi = await fromApi.get(query, pexelsApiKey);
  if(dataApi){return dataApi}

  const fromMock = new getSearch(new getFromMock());
  return await fromMock.get(query, pexelsApiKey);
};
