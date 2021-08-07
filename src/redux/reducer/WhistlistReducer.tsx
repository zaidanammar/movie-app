import Swal from "sweetalert2";

interface iInitialState {
  wishlist: any[];
}

const initialState: iInitialState = {
  wishlist: [],
};

const WhislistReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "ADD_TO_WHISLIST":
      const indexWishlist = state.wishlist.findIndex(
        (fav: any) => fav.imdbID === action.payload.imdbID
      );

      if (indexWishlist >= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This movie is already on your wishlist!",
        });
      } else {
        const new_movie = action.payload;
        Swal.fire({
          icon: "success",
          title: "Yeay...",
          text: "Success add movie to your wishlist!",
        });
        return {
          ...state,
          wishlist: state.wishlist.concat(new_movie),
        };
      }
      break;
    case "REMOVE_FROM_WHISLIST":
      const movie = action.payload;
      const wishlist = state.wishlist;
      const new_wishlist = wishlist.filter((el) => el.imdbID !== movie.imdbID);
      Swal.fire({
        icon: "success",
        title: "Yeay...",
        text: "Success remove movie from your wishlist!",
      });
      return {
        ...state,
        wishlist: new_wishlist,
      };
    default:
      return state;
  }
};

export default WhislistReducer;
