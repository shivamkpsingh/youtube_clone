import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import SearchList from './SearchList'
import { useSearchParams } from 'react-router-dom';

const SearchContainer = () => {
const [search_items, setSearch_items] = useState([]);
const [params] = useSearchParams();
const seach_query = params.get('search_query');

  const getSearchList = async(seach_query) => {
    const search_res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${seach_query}&type=video&key=AIzaSyABp3SjORjUdWVOKVBks20zckVNBvDsBGs`);
    const searhc_data = await search_res.json();
    setSearch_items(searhc_data['items']);

  }
  useEffect(() => {
    getSearchList(seach_query);
  },[seach_query])

  return (
    <div className='shadow-md w-full '>
        <ButtonList/>
        {
          search_items?.map((search_item)=>(
            <SearchList search_item={search_item} key={search_item.id.videoId}/>
          ))
        }
    </div>
  )
}

export default SearchContainer