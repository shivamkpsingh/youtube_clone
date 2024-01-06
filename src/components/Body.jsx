import React from 'react'
import SIdebar from './SIdebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
        <SIdebar/>
        <Outlet/>
    </div>
  )
}

export default Body