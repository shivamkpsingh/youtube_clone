import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../constant';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestions, setShowSuggetions] = useState(false);
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch();


  useEffect(() => {
    const previousTime = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestionList(searchCache[searchQuery]);
      } else {
        searchYoutube(searchQuery);
      }
    },200)
    return () => {
      clearTimeout(previousTime)
    }
  },[searchQuery])


  const searchYoutube = async (searchQuery) => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const jsonData = await response.json();
      setSuggestionList(jsonData[1]);
      dispatch(cacheResults({
        [searchQuery]: jsonData[1]
      }))
      // Process the data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const closeSeachBar = (suggest_list) =>{
    setSearchQuery(suggest_list);
    setShowSuggetions(false);
  }
  

  const handleSidebarToggle = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col p-3'>
      <div className='flex col-span-1'>
        <img onClick={()=> handleSidebarToggle()} className='h-10 mx-2 cursor-pointer' src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="menu button"/>
        <Link to="/">
            <img className='h-10' src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt='youtube logo'/>
        </Link>
       
      </div>
      <div className='col-span-10'>
        <div>
        <input
          className='w-1/2 border border-gray-300 p-2 rounded-l-full outline-none' 
          type='text'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggetions(true)}
          />
          <button className='p-2 border border-gray-300 rounded-r-full bg-gray-100'>search</button>
        </div>
        {
          (showSuggestions && suggestionList.length>0) &&  (<div className='fixed bg-white py-2 px-5 w-[37rem]  shadow-lg rounded-lg'>
            <ul>
              {
                suggestionList?.map((suggest_list)=>{
                  return(
                      <Link key={suggest_list} onClick={() => closeSeachBar(suggest_list)} to={`/result?search_query=${suggest_list}`} >
                        <li className='py-2 shadow-sm hover:bg-gray-300 ps-2 rounded-sm'>
                            {suggest_list}
                        </li>
                      </Link>
                  )
                })
                    
          
              }
            </ul>
        </div>)
        }
      </div>
      <div className='col-span-1'>
        <img className='h-10' src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt='userIcon'/>
      </div>
    </div>
  )
}

export default Header