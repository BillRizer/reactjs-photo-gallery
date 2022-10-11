import { getSearch } from "../../infrastructure/api/pexels/get-search";
import { IGalleryData } from "../types/gallery.type";

export const getSearchPexels = async (query:string): Promise<IGalleryData | null> => {
  return await getSearch(query);
};
