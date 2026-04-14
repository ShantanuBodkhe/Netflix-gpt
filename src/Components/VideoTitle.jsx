import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div  className='text-white w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4 '>{overview}</p>
      <div className=''>
        <button className='text-black py-4 px-12 text-xl bg-white hover:bg-white/80 rounded-lg mr-4'>▶︎ Play</button>
        <button className='text-black py-4 px-12 text-xl bg-white/40 hover:bg-white/80 rounded-lg mr-4'> ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
