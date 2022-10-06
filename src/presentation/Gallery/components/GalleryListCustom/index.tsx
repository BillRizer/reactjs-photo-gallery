import React from "react";
import { IGalleryData } from "../../../../application/types/gallery.type";
import { Photo } from "./style";

interface Props {
  data:IGalleryData;
}

export const GalleryListCustom= ({data}:Props)=> {
  
  return (
    <div className="App">
      <header className="App-header">
        {data.photos && data.photos.length >0 &&
          <div style={{ display: "flex",flexFlow:"row wrap"}}>
            {data.photos.map((photo,index) => (
              <Photo src={photo.src} key={photo.id} />
            ))}
          </div>
          
        }
      </header>
    </div>
  );
}

