import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import useMovieTrailer from '../Hooks/useMovieTrailer'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    useMovieTrailer(movies?.[1]?.id)
    if (!movies?.length) return (
        <div className="w-screen aspect-video">
            <img className="w-screen aspect-video object-cover" 
                 src="https://assets-in.bfi.org.uk/public/image/large/167785-234x132.jpg" 
                 alt="Loading movie poster" />
        </div>
    );

    const mainMovies = movies[1];
    console.log(mainMovies);
    const { original_title: title, overview ,id} = mainMovies ?? {};
    
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
