export const showImagePopUp = (payload: any) => {
  console.log(payload, "pay");
  return (dispatch: any) => {
    dispatch({
      type: "SHOW_IMAGE",
      payload: {
        id: payload.imdbID,
        poster: payload.Poster,
      },
    });
  };
};

