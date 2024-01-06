import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../constant';
import VideoCard from './VideoCard';

const VideoConatainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getYoutubeVideo();
  },[])

  const getYoutubeVideo = async() => {
    const video_list = await fetch(YOUTUBE_API_URL)
    const video_list_res = await video_list.json();
    setVideos(video_list_res.items)
  }
  return (
    <div className='flex flex-wrap'>
    {
      videos.map((video) =>  <VideoCard key={video.id} info={video}/>)
    }
    </div>
  )
}

export default VideoConatainer