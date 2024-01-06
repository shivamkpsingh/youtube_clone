import React from 'react'
// import Comments from './Comments'

const CommentsContainer = () => {

    const commentsData =  [
        {   
            id:1,
            name : 'Shivam singh',
            text: 'how are you, love this video',
            replies:[
                {
                    id:2,
                    name : 'abc singh',
                    text: 'how are you, love this video',
                    replies:[
                        {
                            id:3,
                            name : 'def singh',
                            text: 'how are you, love this video',
                            replies:[
                                {
                                    id:4,
                                    name : 'gfi singh',
                                    text: 'how are you, love this video',
                                    replies:[
                                        {
                                            id:5,
                                            name : 'jkl singh',
                                            text: 'how are you, love this video',
                                            replies:[
                                
                                                {
                                                    id:5,
                                                    name : 'mno singh',
                                                    text: 'how are you, love this video',
                                                    replies:[
                                        
                                                    ]
                                                },
                                            ]
                                        },
                        
                                    ]
                                },
                
                            ]
                        },
                        {
                            id:6,
                            name : 'shubham singh',
                            text: 'how are you, love this video',
                            replies:[
                                {
                                    id:7,
                                    name : 'pqr singh',
                                    text: 'how are you, love this video',
                                    replies:[
                                        {
                                            id:8,
                                            name : 'stu singh',
                                            text: 'how are you, love this video',
                                            replies:[
                                
                                                {
                                                    id:9,
                                                    name : 'vwx singh',
                                                    text: 'how are you, love this video',
                                                    replies:[
                                                        {
                                                            id:10,
                                                            name : 'yed singh',
                                                            text: 'how are you, love this video',
                                                            replies:[
                                                                {
                                                                    id:11,
                                                                    name : 'oee singh',
                                                                    text: 'how are you, love this video',
                                                                    replies:[
                                                                        {
                                                                            id:12,
                                                                            name : 'poe singh',
                                                                            text: 'how are you, love this video',
                                                                            replies:[
                                                                
                                                                            ]
                                                                        },
                                                        
                                                                    ]
                                                                },
                                                
                                                            ]
                                                        },
                                        
                                                    ]
                                                },

                                            ]
                                        },
                        
                                    ]
                                },
                
                            ]
                        },
        
                    ]
                },
                {
                    id:13,
                    name : 'Shivam singh',
                    text: 'how are you, love this video',
                    replies:[
        
                    ]
                },
                {
                    id:14,
                    name : 'Shivam singh',
                    text: 'how are you, love this video',
                    replies:[
        
                    ]
                },

            ]
        },
        {
            id:15,
            name : 'Shivam singh',
            text: 'how are you, love this video',
            replies:[

            ]
        },
        {
            id:16,
            name : 'Shivam singh',
            text: 'how are you, love this video',
            replies:[

            ]
        },
        {
            id:17,
            name : 'Shivam singh',
            text: 'how are you, love this video',
            replies:[
                {
                    id:18,
                    name : 'Shivam singh',
                    text: 'how are you, love this video',
                    replies:[
        
                    ]
                },
                {
                    id:19,
                    name : 'Shivam singh',
                    text: 'how are you, love this video',
                    replies:[
        
                    ]
                },
                {
                    id:21,
                    name : 'Shivam singh',
                    text: 'how are you, love this video',
                    replies:[
        
                    ]
                },
                {
                    id:22,
                    name : 'Shivam singh',
                    text: 'how are you, love this video',
                    replies:[
        
                    ]
                },

            ]
        },
        {
            id:31,
            name : 'Shivam singh',
            text: 'how are you, love this video',
            replies:[

            ]
        },
        {
            id:41,
            name : 'Shivam singh',
            text: 'how are you, love this video',
            replies:[

            ]
        },
    ]


const Comment = ({data}) => {
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

const CommentsList = ({comments}) =>{
    return comments.map((comment)=>(
        <div key={comment.id}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))
}


  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList key="dmmdmdd" comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer