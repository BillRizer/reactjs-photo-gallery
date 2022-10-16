import { React, fireEvent, render, screen } from "../../../global/test-imports";
import { ISearch } from "./dtos/get-search.dto";
import { getSearch, IRequest } from "./get-search";

const mockISearch: ISearch = {
  source: "mock",
  page: 1,
  per_page: 15,
  next_page:1,
  total_results:100,
  photos: [
    {
      id: 15286,
      width: 2500,
      height: 1667,
      url: "https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/",
      photographer: "Luis del Río",
      photographer_url: "https://www.pexels.com/@luisdelrio",
      photographer_id: 1081,
      avg_color: "#283419",
      src: {
        original: "https://images.pexels.com/photos/15286/pexels-photo.jpg",
        large2x:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940",
        large:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940",
        medium:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=350",
        small:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=130",
        portrait:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800",
        landscape:
          "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200",
        tiny: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280",
      },
      liked: false,
      alt: "Person Walking Between Green Forest Trees",
    },
    {
      id: 3408744,
      width: 3546,
      height: 2255,
      url: "https://www.pexels.com/photo/scenic-view-of-snow-capped-mountains-during-night-3408744/",
      photographer: "stein egil liland",
      photographer_url: "https://www.pexels.com/@therato",
      photographer_id: 144244,
      avg_color: "#557088",
      src: {
        original:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
        large2x:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940",
        large:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940",
        medium:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350",
        small:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130",
        portrait:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800",
        landscape:
          "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200",
        tiny: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280",
      },
      liked: false,
      alt: "Scenic View Of Snow Capped Mountains During Night",
    },
  ],
};
const mockIGalleryData = {
  page: 1,
  per_page: 15,
  next_page:1,
  total_results:100,
  photos: [
    {
      alt: "Person Walking Between Green Forest Trees",
      avg_color: "#283419",
      height: 1667,
      id: 15286,
      liked: false,
      photographer: "Luis del Río",
      photographer_id: 1081,
      photographer_url: "https://www.pexels.com/@luisdelrio",
      src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      url: "https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/",
      width: 2500,
    },
    {
      alt: "Scenic View Of Snow Capped Mountains During Night",
      avg_color: "#557088",
      height: 2255,
      id: 3408744,
      liked: false,
      photographer: "stein egil liland",
      photographer_id: 144244,
      photographer_url: "https://www.pexels.com/@therato",
      src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=350",
      url: "https://www.pexels.com/photo/scenic-view-of-snow-capped-mountains-during-night-3408744/",
      width: 3546,
    },
  ],
  source: "mock",
};
export class mockedRequest implements IRequest {
  async getSearch(
    query: string,
    pexelsApiKey: string
  ): Promise<ISearch | null> {
    return mockISearch;
  }
}

describe("infra - get-Search", () => {
  test("should parse data", async () => {
    const fromApi = new getSearch(new mockedRequest());
    const dataApi = await fromApi.get("query", "pexelsApiKey",0);

    expect(dataApi).toBeDefined();
    expect(dataApi).toEqual(mockIGalleryData)
  });
});
