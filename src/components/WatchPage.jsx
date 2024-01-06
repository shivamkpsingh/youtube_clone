import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../constant';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [params] = useSearchParams();
    const dispatch = useDispatch();

    // const loadVideoById = async(video_id)=> {
    //     console.log('GOOGLE_API_KEY',GOOGLE_API_KEY)
    //     console.log('video_id',video_id)
    //     const video = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${video_id}=${GOOGLE_API_KEY}`)
    //     const video_res = await video.json();
    //     console.log('vide',video_res);
    // }

    useEffect(()=> {
        dispatch(closeMenu());
        // loadVideoById(params.get('v'));
    },[])
  return (
    <div className='flex flex-col'>
    <div className='rounded-xl'>
        <iframe 
        width="1000" 
        height="500" 
        src={"https://www.youtube.com/embed/"+params.get('v')} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage