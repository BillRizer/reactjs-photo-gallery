// schema que utilizarei no meu app
// nao é o mesmo que vem da api

interface IPhoto {
  id: number;
  url: string;
  avg_color: string;
  src: string;
  width:number,
  height:number;
  alt: string;
}
export interface IGalleryData {
  page: number;
  per_page: number;
  photos: Array<IPhoto>;
}
