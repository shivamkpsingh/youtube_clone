import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { GoHistory } from "react-icons/go";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { GrLike } from "react-icons/gr";

const SIdebar = () => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)
    if (!isMenuOpen) return null;

  return (
    <div className='p-4 shadow-md w-80'>
        <ul>
            <li className='flex items-center hover:bg-gray-100 p-2 rounded-md'>
            <IoMdHome />
            <NavLink to="/" className='ml-2'>
                Home
            </NavLink>
            </li>
            <li className='flex items-center hover:bg-gray-100 p-2 rounded-md'>
            <SiYoutubeshorts />
            <Link to="/" className='ml-2'>
                Short
            </Link>
            </li>
            <li className='flex items-center hover:bg-gray-100 p-2 rounded-md'>
            <MdSubscriptions />
            <Link to="/" className='ml-2'>
                Subscriptions
            </Link>
            </li>
        </ul>
        <h1 className='font-bold pt-5 mb-2'>Subscriptions</h1>
        <ul>
        <li className='flex items-center hover:bg-gray-100 p-2 rounded-md'>
            <ImProfile />
            <Link to="/" className='ml-2'>
                Your Channel
            </Link>
            </li>
            <li className='flex items-center hover:bg-gray-100 p-2 rounded-md'>
            <GoHistory />
            <Link to="/" className='ml-2'>
               History
            </Link>
            </li>
            <li className='flex items-center hover:bg-gray-100 p-2 rounded-md'>
            <BiSolidVideos />
            <Link to="/" className='ml-2'>
                Your Videos
            </Link>
            </li>
            <li className='flex items-center hover:bg-gray-100 p-2 rounded-md'>
            <MdOutlineWatchLater />
            <Link to="/" className='ml-2'>
                Watch Later
            </Link>
            </li>
            <li className='flex items-center hover:bg-gray-100 p-2 rounded-md'>
            <GrLike />
            <Link to="/" className='ml-2'>
                Liked Videos
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default SIdebar