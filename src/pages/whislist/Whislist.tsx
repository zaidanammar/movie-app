import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";

const Whislist = () => {
  const wishlist = useSelector((state: any) => state.WhistlistReducer.wishlist);

  return (
    <section className="h-full">
      <div className="mt-5">
        <div>
          <h1 className="text-white text-xl font-bold">List Wishlist</h1>
        </div>

        {wishlist.length <= 0 ? (
          <div className="h-screen flex justify-center mt-20">
            <h1 className="font-bold text-xl text-buttonPink">
              Sory:( your wishlist is empty, please add a movie
            </h1>
          </div>
        ) : (
          <div className="h-screen mt-10">
            <div className="grid grid-cols-5 gap-10 gap-y-0 ">
              {wishlist.map((el: any) => (
                <Card isOnWishlist={true} data={el} key={el.imdbID} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Whislist;
