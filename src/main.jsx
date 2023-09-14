import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar.jsx'
import { SearchBar } from './components/SearchBar'
import { PostList } from './components/PostList'
import { Profile } from './components/Profile'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <NavBar/>
    <Profile 
      avatar={"https://picsum.photos/id/237/200/200"}
      username={"@dobby"}
      bio={"Enim ullamco esse est nostrud adipisicing qui deserunt esse esse ea eiusmod.Velit mollit ipsum nulla cupidatat duis qui aliquip dolore dolor do aliqua nulla."}
    />
    <SearchBar/>
    <PostList /> */}
  </React.StrictMode>,
)
