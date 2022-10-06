import React from "react";
import { getSearch } from "../../infrastructure/api/pexels/get-search";
import { IGalleryData } from "../types/gallery.type";

export const getSearchPexels = async (): Promise<IGalleryData | null> => {
  return await getSearch("");
};
