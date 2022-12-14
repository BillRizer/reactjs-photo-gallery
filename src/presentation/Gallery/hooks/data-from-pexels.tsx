import React, { useState, useCallback, useContext, createContext } from "react";
import { getSearchPexels } from "../../../application/services/get-search-pexels";
import { IGalleryData } from "../../../application/types/gallery.type";

interface IContextData {
  loadGallery(query: string, pexelsApiKey: string,page:number,per_page:number): Promise<void>;
  gallery: IGalleryData | null;
}

const Context = createContext<IContextData>({} as IContextData);
interface Props {
  children: any;
}
export const Provider = ({ children }: Props) => {
  const [data, setData] = useState<IGalleryData | null>(null);

  const loadGallery = useCallback(
    async (query: string, pexelsApiKey: string,page:number,per_page:number) => {
      const data = await getSearchPexels(query,pexelsApiKey,page,per_page);
      setData(data);
    },
    []
  );

  return (
    <Context.Provider value={{ gallery: data, loadGallery }}>
      {children}
    </Context.Provider>
  );
};

export function useDataFromPexels(): IContextData {
  const context = useContext(Context);

  if (!context)
    throw new Error("useDataFromPexels must be used within an Provider");

  return context;
}
