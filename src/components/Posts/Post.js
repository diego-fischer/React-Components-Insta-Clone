import Comments from '../Comments/Comments'
import LikeSection from './LikeSection'
import PostHeader from './PostHeader'
import React, { useState } from 'react'

const Post = (props) => {
  const { post } = props
  const [numOfLikes, setNumOfLikes] = useState(post.likes)

  const likePost = () => {
    setNumOfLikes(numOfLikes + 1)
    console.log('LIKES', numOfLikes)
  }

  return (
    <div className='post-border'>
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className='post-image-wrapper'>
        <img alt='post thumbnail' className='post-image' src={post.imageUrl} />
      </div>

      <LikeSection
        numOfLikes={numOfLikes}
        postID={post.id}
        likePost={likePost}
      />

      <Comments comments={post.comments} />
    </div>
  )
}

export default Post
