interface iInitialState {
  show_image: {
    poster: string;
    id: string;
  };
  movie: any[];
}

const initialState: iInitialState = {
  show_image: {
    poster: "",
    id: "",
  },
  movie: [],
};

const MovieReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SHOW_IMAGE":
      const payload = action.payload;
      document.body.classList[payload.id ? "add" : "remove"](
        "h-screen",
        "overflow-hidden"
      );
      return { ...state, show_image: payload };
    case "GET_MOVIE":
      const movie = action.payload;
      return { ...state, movie };
    default:
      return state;
  }
};

export default MovieReducer;
