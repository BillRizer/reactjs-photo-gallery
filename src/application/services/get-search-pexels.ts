import {
  getSearchFromApi,
  getSearchFromMock,
} from "../../infrastructure/api/pexels/get-search";
import { IGalleryData } from "../types/gallery.type";

export const getSearchPexels = async (
  query: string,
  pexelsApiKey:string
): Promise<IGalleryData | null> => {
  return (await getSearchFromApi(query,pexelsApiKey)) || getSearchFromMock();
};
