import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({info}) => {
  return (
    <Link to={`/watch?v=${info.id}`}>
    <div className='p-2 m-2 w-72 shadow-md'>
        <img className='rounded-lg' src={info.snippet.thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{info.snippet.localized.title}</li>
            <li>{info.snippet.channelTitle}</li>
            <li>{info.statistics.viewCount} view</li>
        </ul>
    </div>
    </Link>
  )
}

export default VideoCard