import React, { useState } from 'react'
import Posts from './Posts'
import { getRequest } from './Services'
import './App.css'

function App() {

  const [posts, setPosts] = useState([])
  
  const [query, setQuery] = useState('')

  const fetchPosts = async query => {
      const { data } = await getRequest.get(query)
      setPosts(data.hits)
      console.log(data)
  }
  
  const search = (e, query) => {
    e.preventDefault()
    fetchPosts(query)
    setQuery('')
  }

  return (
    <div className="App container">
      <h1>Hacker News</h1>
      <form className="jumbotron">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
        <button onClick={e => search(e, query)}>GO</button>
      </form>
      <Posts list={posts}/>
    </div>
  )
}

export default App;