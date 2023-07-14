import React from "react";

const baseUrl = '/api/post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

export const addPost = (singlePost) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};

//Add a "Search Posts" feature to your app that uses the /api/post/search API endpoint.
export const SearchPosts = (query) => { //http GET by Search `/api/Post/search?q=<query>`
  return fetch(`${baseUrl}/search?q=${query}`)
  .then((r) => r.json())
}