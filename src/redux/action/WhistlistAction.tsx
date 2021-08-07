import { MovieRequest } from "../../apis/MovieRequest";

export const addToWhislist = (id: any) => {
  return async (dispatch: any) => {
    try {
      const result = await MovieRequest.getMovieDetail(id);
      if (result) {
        dispatch({
          type: "ADD_TO_WHISLIST",
          payload: result,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFromWhislist = (id: any) => {
  return async (dispatch: any) => {
    try {
      const result = await MovieRequest.getMovieDetail(id);
      if (result) {
        dispatch({
          type: "REMOVE_FROM_WHISLIST",
          payload: result,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

