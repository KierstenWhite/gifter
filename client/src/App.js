import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import { render } from "react-dom";
import { PostForm } from "./components/PostForm";
import { PostSearch } from "./components/PostSearch";

function App() {
 render(
  <BrowserRouter>
  <PostSearch />
  <PostForm />
    <PostList />
  </BrowserRouter>,
  document.getElementById('root')
)
}

export default App;