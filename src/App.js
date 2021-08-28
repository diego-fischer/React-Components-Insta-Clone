import React, { useState } from 'react'
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState(dummyData)

  // const likePost = (postId) => {
  //   return ''
  // }

  return (
    <div className='App'>
      <SearchBar></SearchBar>
      <Posts posts={posts}></Posts>
    </div>
  )
}

export default App
