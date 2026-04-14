import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // const dispatch = useDispatch();
  // // curl --request GET \
  // //    --url 'https://api.themoviedb.org/3/movie/1226863/videos?language=en-US' \
  // //    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzY0MTczMGZiMDYwMTMzYTk4MjEwYmI1ZDU4ZGJlYyIsIm5iZiI6MTc3NTg5MDIwNS43NTEwMDAyLCJzdWIiOiI2OWQ5ZWYxZDNlZTI4NWYwM2RiNjQ2NTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4deoYXjlBkN8TlM-lRIEamyiIxpZqFpDBiugntXTsbo' \
  // //    --header 'accept: application/json'

  // //fetch trailer video  $$ updating the store  with trailer Video data
  // const getMovieVideos = async () => {
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/1226863/videos?language=en-US`,
      // API_OPTIONS,
  //   );
  //   const json = await data.json();
  //   console.log(json);

  //   const trailer = json.results.find((video) => video.type === "Trailer");
  //   // const trailer = filterData.length ? filterData[0] : json.results[0];
  //   console.log(trailer);
  //   dispatch(addTrailerVideo(trailer));


  //   // const YOUTUBE_URL = "https://www.youtube.com/embed/";

  //   // const trailerKey = data.results[0]?.key;

  //   // const trailerUrl = YOUTUBE_URL + trailerKey;
  // };

  // useEffect(() => {
  //   getMovieVideos();
  // }, []);

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
