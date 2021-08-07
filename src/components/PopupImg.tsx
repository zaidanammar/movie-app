import React, { useRef } from "react";
import { useSelector } from "react-redux";
import HandleClickOutside from "../utils/handle_click_outside/HandleClickOutside";

const PopupImg = () => {
  const show_image = useSelector((state: any) => state.MovieReducer.show_image);
  const wrapperRef = useRef(null);
  HandleClickOutside(wrapperRef, show_image, "SHOW_IMAGE");

  console.log(show_image);
  if (show_image.id) {
    return (
      <div className="w-full h-screen fixed inset-0 flex  justify-center items-center bg-black bg-opacity-80 z-50">
        <div
          ref={wrapperRef}
          className="flex justify-center items-center w-1/4"
        >
          <img
            src={show_image.poster}
            alt=""
            className="shadow-md rounded-xl w-full"
          />
        </div>
      </div>
    );
  }
  return <div className="hidden"></div>;
};

export default PopupImg;
