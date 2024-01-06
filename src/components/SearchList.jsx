import React from 'react'
import { Link } from 'react-router-dom';

const SearchList = ({search_item}) => {
const GetTimeInDays = (publishTime) => {
    const currentDate = new Date(); // Current date
    const publishDate = new Date(publishTime); // Published date

    const timeDifference = currentDate - publishDate;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30; // Approximating a month to 30 days
    const year = day * 365; // Approximating a year to 365 days

    if (timeDifference < minute) {
        return 'Just now';
    } else if (timeDifference < hour) {
        const minutes = Math.floor(timeDifference / minute);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < day) {
        const hours = Math.floor(timeDifference / hour);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < month) {
        const days = Math.floor(timeDifference / day);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < year) {
        const months = Math.floor(timeDifference / month);
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(timeDifference / year);
        return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
}
const upload_time = GetTimeInDays(search_item.snippet.publishedAt);



  return (
    <Link to={`/watch?v=${search_item.id.videoId}`}>
        <div className='flex shadow-sm mt-3'>
        <div className='border border-gray-400 rounded-md'>
            <img className='rounded-md' src={search_item.snippet.thumbnails.medium.url} alt={search_item.snippet.channelTitle}/>
        </div>
        <div className='ml-3'>
            <div>
                <h1 className="text-xl">{search_item.snippet.title}</h1>
                <p className='font-medium'>{upload_time}</p>
            </div>
            <div>
                <span className='font-medium'>{search_item.snippet.channelTitle}</span>
            </div>
            <div>
                <span>{search_item.snippet.description}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default SearchList