import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as MovieAction from "../../redux/action/MovieAction";

export default function HandleClickOutside(
  ref: any,
  state: any,
  type: string,
) {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(MovieAction.showImagePopUp({ poster: "", id: "" }));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, ref, state, type]);
}
