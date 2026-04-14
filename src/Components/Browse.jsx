import React from 'react'
import Header from './Header';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse
