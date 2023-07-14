import React, { useState, useEffect } from "react";
import { SearchPosts, getAllPosts } from "../APIManagers/PostManager";
import { InputGroup, Button, Input } from "reactstrap";


export const PostSearch = () => {

const [query, setQuery] = useState("");
const [posts, setPosts] = useState([]);
const [results, setResults] = useState([]);

const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts));
}

const SearchAllPosts = (e) => {
    e.preventDefault();
    SearchPosts(query)
    .then((res) => {
        setResults(res);
    })
}

useEffect(() => {
    getPosts();
  }, []); //empty array [] means it will run once when page loads



    return (
        <div className="search-bar-contrainer">
            <InputGroup>
            <Input property="search" placeholder = "Type to search posts..." onChange={e => setQuery(e.target.value)} />
            <Button onClick={SearchAllPosts}>Search</Button>
            </InputGroup>
            <div>{results.map((post) => (
                <div key={post.id}>
                    {post.title}
                </div>
            ))}
        </div>
        </div>
    )
};