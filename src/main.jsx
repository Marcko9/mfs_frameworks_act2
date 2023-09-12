import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar.jsx'
import { SearchBar } from './components/SearchBar'
import { PostList } from './components/PostList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <SearchBar/>
    <PostList />
  </React.StrictMode>,
)
