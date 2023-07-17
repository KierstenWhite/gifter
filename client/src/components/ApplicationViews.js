import { Routes, Route, Navigate} from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";

const ApplicationViews = () => {


    /*
    A few things to note here. First, the <'Routes'> and <Route> components are ones 
    we get from the npm module we just installed. The Routes component is going to 
    look at the url and render the first route that is a match.
    Second thing to note is the <Route> component. If a url matches the value of the 
    path attribute, the children of that <Route> will be what gets rendered. As we've 
    seen before, URLs often have route params in them. The third route here is an example 
    of a path with a route param: /posts/:id. Using the colon, we can tell the react router 
    that this will be some id parameter. These are all examples of paths that would match this route:
    
    /posts/5
    /posts/12345
    /posts/foo
    */
    return (

        <Routes>
             <Route path="/" element= {<PostList />} />
        
                <Route path="/posts/add" element={<PostForm />} />
        
                 <Route path="/posts/:id" element={<PostDetails />} />

                 <Route path="*" element={<p>Whoops, nothing here...</p>} />

        </Routes>
    )
}

export default ApplicationViews;