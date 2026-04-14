import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  

  if (!trailerVideo?.key) {
    return <div className="w-screen aspect-video bg-black flex items-center justify-center">
      <div>Loading trailer...</div>
    </div>;
  }

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        autoPlay
      ></iframe>
    </div>
  );
};

export default VideoBackground;
