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
  source:string,
  page: number;
  per_page: number;
  photos: Array<IPhoto>;
  next_page:number
  total_results:number
}
