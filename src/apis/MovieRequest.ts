import axiosInstance from "../config/AxiosInstance";

export class MovieRequest {
  static getListMovie = async () => {
    try {
      const location = document.location.search;
      const query = new URLSearchParams(location);
      const results = await axiosInstance().get("/", {
        params: {
          ...(query.get("s") !== null && {
            s: query.get("s") || "spider",
          }),
          page: "1",
        },
      });
      const result = await results.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  static getMovieDetail = async (id: string) => {
    try {
      const results = await axiosInstance().get("/", {
        params: {
          i: id,
        },
      });
      const result = results.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  static getMoreMovie = async (page: number) => {
    try {
      const location = document.location.search;
      const query = new URLSearchParams(location);
      const results: any = await axiosInstance().get(`/`, {
        params: {
          s: query.get("s") || "spider",
          page,
        },
      });
      const result = await results.data.Search;
      return result;
    } catch (error) {
      console.log(error);
    }
  };
}
