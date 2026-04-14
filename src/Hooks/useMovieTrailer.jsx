 import React, { useEffect } from "react";
 import { useDispatch } from "react-redux";
 import { addTrailerVideo } from "../Utils/moviesSlice";
 import { API_OPTIONS } from "../Utils/Constants.jsx"
 const useMovieTrailer = (movieId) => {
   const dispatch = useDispatch();
   // curl --request GET \
   //    --url 'https://api.themoviedb.org/3/movie/1226863/videos?language=en-US' \
   //    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzY0MTczMGZiMDYwMTMzYTk4MjEwYmI1ZDU4ZGJlYyIsIm5iZiI6MTc3NTg5MDIwNS43NTEwMDAyLCJzdWIiOiI2OWQ5ZWYxZDNlZTI4NWYwM2RiNjQ2NTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4deoYXjlBkN8TlM-lRIEamyiIxpZqFpDBiugntXTsbo' \
   //    --header 'accept: application/json
   //fetch trailer video  $$ updating the store  with trailer Video data
   const getMovieVideos = async () => {
     const data = await fetch(
       "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
       API_OPTIONS,
     );
     const json = await data.json();
     console.log(json)
     const trailer = json.results.find((video) => video.type === "Trailer");
     // const trailer = filterData.length ? filterData[0] : json.results[0];
     console.log(trailer);
     dispatch(addTrailerVideo(trailer))
     // const YOUTUBE_URL = "https://www.youtube.com/embed/"
     // const trailerKey = data.results[0]?.key
     // const trailerUrl = YOUTUBE_URL + trailerKey;
   }
   useEffect(() => {  getMovieVideos();
   }, []);
 }
 export default useMovieTrailer;
