import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div  className='pt-40 px-12'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4 '>{overview}</p>
      <div className=''>
        <button className='text-white py-4 px-12 text-xl bg-black/40 hover:bg-black/90 rounded-lg mr-4'>▶︎ Play</button>
        <button className='text-white py-4 px-12 text-xl bg-black/40 hover:bg-black/90 rounded-lg mr-4'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
