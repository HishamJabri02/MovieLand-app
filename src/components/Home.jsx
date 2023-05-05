import React, { useEffect } from "react";
import MovieListing from "./MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../redux/MovieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const movieText = "spider";
  const ShowText = "game";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(ShowText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
