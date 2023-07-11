import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import { render } from "react-dom";

function App() {
 render(
  <BrowserRouter>
    <PostList />
  </BrowserRouter>,
  document.getElementById('root')
)
}

export default App;
