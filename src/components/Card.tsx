import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { delete as delIcon, wishlist } from "../assets/icons";
import { MovieType } from "../interface/MovieInterface";
import * as WhistlistAction from "../redux/action/WhistlistAction";
import * as MovieAction from "../redux/action/MovieAction";

const Card: React.FC<MovieType> = ({ data, isOnWishlist }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addToWhislist = useCallback(
    async (id) => {
      await dispatch(WhistlistAction.addToWhislist(id));
    },
    [dispatch]
  );

  const removeFromWhislist = useCallback(
    async (id) => {
      await dispatch(WhistlistAction.removeFromWhislist(id));
    },
    [dispatch]
  );

  return (
    <div className="h-4/5 shadow-xl">
      <div className="absolute bg-black bg-opacity-50 hover:bg-opacity-100 p-3">
        <img
          src={isOnWishlist ? delIcon : wishlist}
          alt="icon"
          className={"cursor-pointer " + (isOnWishlist ? "w-4" : "w-6")}
          onClick={
            isOnWishlist
              ? () => removeFromWhislist(data.imdbID)
              : () => addToWhislist(data.imdbID)
          }
        />
      </div>
      <div className="h-full w-full">
        <img
          onClick={() => dispatch(MovieAction.showImagePopUp(data))}
          src={data.Poster}
          alt={data.imdbID}
          className="h-full w-full cursor-pointer"
        />
      </div>
      <button
        onClick={() => history.push(`/movie/${data.imdbID}`)}
        className="w-full bg-buttonPink hover:bg-opacity-80 h-1/6"
      >
        <h1 className="text-white font-bold text-lg">See Detail</h1>
      </button>
    </div>
  );
};

export default Card;
