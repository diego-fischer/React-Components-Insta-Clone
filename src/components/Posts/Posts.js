import React from 'react'
import Post from './Post'
import './Posts.css'

const Posts = (props) => {
  const { posts } = props

  return (
    <div className='posts-container-wrapper'>
      {posts.map((el) => {
        return <Post post={el} />
      })}
    </div>
  )
}

export default Posts
