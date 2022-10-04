import React, { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import { ISearchData } from "../../../../application/types/search.type";


export const GalleryListMosaic= ()=> {
  const [search, setSearch] = useState<ISearchData>();

  useEffect(() => {
    setSearch(require('../../../../_mocks/search-mock-data.json'))
  }, []);

  return (
    <div className="App">
        {search && search.photos.length >0 &&
          <Gallery photos={search?.photos} key={""}/>
        }
    </div>
  );
}

