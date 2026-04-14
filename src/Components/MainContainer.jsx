import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import useMovieTrailer from '../Hooks/useMovieTrailer'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    useMovieTrailer(movies?.[2]?.id)

    if (!movies?.length) return (

        <div className="w-screen aspect-video">
            <img className="w-screen aspect-video object-cover" 
                 src="/src/Utils/Logo.png"
                 alt="Loading..." />
        </div>
    );


    const mainMovies = movies[2];
    const { original_title: title, overview ,id} = mainMovies ?? {};
    
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
