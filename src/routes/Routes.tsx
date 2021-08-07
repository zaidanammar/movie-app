import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Movie from "../pages/movie/Movie";
import MovieDetail from "../pages/movie/MovieDetail";
import Whislist from "../pages/whislist/Whislist";
import ScrollToTop from "../utils/scrollToTop/ScrollToTop";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import WhistlistReducer from "../redux/reducer/WhistlistReducer";
import MovieReducer from "../redux/reducer/MovieReducer";
import PopupImg from "../components/PopupImg";

const rootReducer = combineReducers({
  WhistlistReducer,
  MovieReducer,
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const Routes = () => {
  return (
    <>
      <Provider store={store}>
        <div className="flex w-full bg-bgColor bg-opacity-90">
          <div className="w-1/6">
            <Sidebar />
          </div>
          <PopupImg />
          <div className="w-5/6 h-full px-10">
            <ScrollToTop />
            <Switch>
              <Route path="/movie" exact component={Movie} />
              <Route path="/movie/:id" exact component={MovieDetail} />
              <Route path="/whislist" exact component={Whislist} />
              <Redirect from="/" to="/movie" exact />
            </Switch>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default Routes;
