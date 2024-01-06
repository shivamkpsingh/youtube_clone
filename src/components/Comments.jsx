import React from 'react'

const Comments = ({data}) => {
  return (
    <div className='flex bg-gray-100 m-2 p-2'>
        <img
        className='w-10 h-10'  
        src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt='userIcon'/>
        <div className='px-3'>
            <p className='font-bold'>{data.name}</p>
            <p>{data.text}</p>
        </div>
    </div>

  )
}

export default Comments