 import React, { useEffect } from "react";
 import { useDispatch } from "react-redux";
 import { addTrailerVideo } from "../Utils/moviesSlice";
 import { API_OPTIONS } from "../Utils/Constants.jsx"
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
    if (!movieId) return;
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();
    const trailer = json?.results?.find((video) => video.type === "Trailer") ?? null;
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
};

 export default useMovieTrailer;
