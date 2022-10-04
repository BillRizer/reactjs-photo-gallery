import React, { useEffect, useState } from "react";
import { ISearchData } from "../../../../application/types/search.type";
import { Photo } from "./style";

export const GalleryListCustom= ()=> {
  const [search, setSearch] = useState<ISearchData>();
  useEffect(() => {
    setSearch(require('../../../../_mocks/search-mock-data.json'))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {search && search.photos.length >0 &&
          <div style={{ display: "flex",flexFlow:"row wrap"}}>
            {search.photos.map((photo,index) => (
              <Photo src={photo.src} key={photo.id} />
            ))}
          </div>
          
        }
      </header>
    </div>
  );
}

