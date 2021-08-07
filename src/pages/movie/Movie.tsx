import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { MovieRequest } from "../../apis/MovieRequest";
import { ElType } from "../../interface/MovieInterface";
import Card from "../../components/Card";
import { useQueries } from "../../utils/querySearch/QuerySearchParams";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import Loading from "../../components/loading/Loading";
import InfiniteScroll from "react-infinite-scroller";
import ContactSkeletonLoading from "../../components/loading/SkeletonLoading";
import { useDispatch, useSelector } from "react-redux";

const Movie = () => {
  const query = useQueries(useLocation);
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [more, setMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const limit = 10;
  const movie = useSelector((state: any) => state.MovieReducer.movie);

  const { data, isLoading } = useQuery(
    ["getListMovie", query.get("s"), query.get("page")],
    () => MovieRequest.getListMovie()
  );

  const fetchMoredata = async () => {
    const new_data = [...movie, ...(await MovieRequest.getMoreMovie(page))];
    dispatch({
      type: "GET_MOVIE",
      payload: new_data,
    });
  };

  useEffect(() => {
    if (data?.Search?.length > 0) {
      dispatch({
        type: "GET_MOVIE",
        payload: data?.Search,
      });
    }
  }, [data]);

  useEffect(() => {
    if (data?.totalResults - movie?.length < limit) {
      setMore(false);
    } else {
      setMore(true);
    }
  }, [movie?.length]);

  useEffect(() => {
    if (movie?.length >= limit) {
      setPage(page + 1);
    }
  }, [movie?.length]);

  return (
    <section className="h-full">
      <div className="flex justify-between fixed top-0 right-0 px-10 py-3.5 items-center w-5/6 bg-bgColor z-30 shadow-xl">
        <div className="w-2/6">
          <h1 className="text-2xl text-white font-bold">Movie</h1>
        </div>
        <div className="w-4/6">
          <input
            onChange={(e) =>
              history.push({ pathname, search: `s=${e.target.value}` })
            }
            value={query.get("s") || ""}
            type="text"
            className="w-full border-1 bg-gray-100 focus:ring-1 focus:outline-none py-1.5 px-3.5 rounded-lg"
            placeholder="Search a movie ?"
          />
        </div>
      </div>
      <div className="mt-24">
        <div className="mb-5">
          <h1 className="text-white text-xl font-bold">List Movie</h1>
        </div>
        {isLoading ? (
          <div className="w-full h-screen flex justify-center">
            <Loading />
          </div>
        ) : data?.Response === "False" ? (
          <div className="w-full h-screen flex justify-center">
            <h1 className="text-white font-bold">{data.Error}</h1>
          </div>
        ) : data?.Response === "True" ? (
          <InfiniteScroll
            initialLoad={false}
            loadMore={fetchMoredata}
            hasMore={more}
            loader={<ContactSkeletonLoading />}
          >
            <div className="">
              <div className="grid grid-cols-5 gap-10 gap-y-0 ">
                {movie?.map((el: ElType) => (
                  <Card data={el} key={el.imdbID} />
                ))}
              </div>
            </div>
          </InfiniteScroll>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Movie;
