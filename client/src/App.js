import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import { render } from "react-dom";
import { PostForm } from "./components/PostForm";

function App() {
 render(
  <BrowserRouter>
  <PostForm />
    <PostList />
  </BrowserRouter>,
  document.getElementById('root')
)
}

export default App;