import React, { useCallback } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { MovieRequest } from "../../apis/MovieRequest";
import Loading from "../../components/loading/Loading";
import { useQueries } from "../../utils/querySearch/QuerySearchParams";
import * as WhistlistAction from "../../redux/action/WhistlistAction";
import { back } from "../../assets/icons";

const MovieDetail = () => {
  const history = useHistory();
  const query = useQueries(useLocation);
  const params: { id: string } = useParams();
  const { data, isLoading } = useQuery(["getMovieDetail", query.get("i")], () =>
    MovieRequest.getMovieDetail(params.id)
  );

  const dispatch = useDispatch();

  const addToWhislist = useCallback(
    async (id) => {
      await dispatch(WhistlistAction.addToWhislist(id));
    },
    [dispatch]
  );

  return (
    <section className="h-screen text-white">
      <div>
        {isLoading ? (
          <div className="w-full h-screen flex justify-center mt-20">
            <Loading />
          </div>
        ) : data?.Response === "False" ? (
          <div className="w-full h-screen flex justify-center">
            <h1 className="font-bold">{data.Error}</h1>
          </div>
        ) : data?.Response === "True" ? (
          <section>
            <div className="mt-5 flex justify-between">
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    onClick={() => history.goBack()}
                    src={back}
                    alt="back-svg"
                    className="w-7 cursor-pointer"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-2xl">{data.Title}</h1>
                  <h1 className="text-blue-400 mt-1.5 text-sm">{data.Genre}</h1>
                </div>
              </div>
              <div className="flex items-center text-xl">
                <h1 className="font-bold text-blue-400">{data.imdbRating}</h1>
                <h1 className="ml-1 text-gray-200"> / 10</h1>
              </div>
            </div>
            <div className="mt-10 flex w-full h-full">
              <div className="w-1/4">
                <img
                  src={data.Poster}
                  alt={data.imdbID}
                  className="w-full rounded-md shadow-xl"
                />
              </div>
              <div className="w-3/4 ml-10 flex flex-col">
                <div>
                  <h1 className="font-bold text-xl">About the Movie</h1>
                  <p className="my-2">{data.Plot}</p>
                </div>
                <div className="grid grid-cols-3 justify-between gap-x-2 gap-y-8 w-full my-3">
                  <div>
                    <h1 className="font-bold text-xl">Actors</h1>
                    {data.Actors?.split(",").map((el: string) => (
                      <h1 className="text-blue-400 my-1">{el}</h1>
                    ))}
                  </div>
                  <div>
                    <div>
                      <h1 className="font-bold text-xl">Writer</h1>
                      {data.Writer?.split(",").map((el: string) => (
                        <h1 className="text-blue-400 my-1">{el}</h1>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">Production</h1>
                    {data.Production?.split(",").map((el: string) => (
                      <h1 className="text-blue-400 my-1">{el}</h1>
                    ))}
                  </div>
                  <div>
                    <h1 className="font-bold text-lg">Release Date</h1>
                    <h1 className="text-blue-400">{data.Released}</h1>
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">Director</h1>{" "}
                    {data.Production?.split(",").map((el: string) => (
                      <h1 className="text-blue-400 my-1">{el}</h1>
                    ))}
                  </div>
                  <div>
                    <h1 className="font-bold text-xl">Writer</h1>
                    {data.Writer.split(",").map((el: string) => (
                      <h1 className="text-blue-400 my-1">{el}</h1>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <h1 className="font-bold my-7 text-lg">{data.BoxOffice}</h1>
              <button
                type="button"
                onClick={() => addToWhislist(data.imdbID)}
                className="bg-black bg-opacity-60 hover:bg-opacity-100 rounded-md px-5 py-2.5"
              >
                <h1>Add to Whistlist</h1>
              </button>
            </div>
          </section>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default MovieDetail;
