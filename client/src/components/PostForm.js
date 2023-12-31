import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addPost } from "../APIManagers/PostManager"

const PostForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [post, setPost] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        userProfileId: 0,
        dateCreated: Date.now()
    })
   
    const navigate = useNavigate()

  
    const handleSaveButtonClick = (event) => { 
        event.preventDefault()

       const postToSendToAPI = {
        title: post.title,
        imageUrl: post.imageUrl,
        caption: post.caption,
        userProfileId: 1,
        dateCreated: new Date().toISOString()
       }

       return addPost(postToSendToAPI)  // navigation correct?
         .then(() => {navigate("/")});
    }

    //This is DRY coding  rather than doing this on each input below
    const saveNewPost = (evt) => {
        const copy = {...post}
        copy[evt.target.id] = evt.target.value
        setPost(copy)
    }

    return (
        <form className="newPostForm">
            <h2 className="postForm__title">Add a New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title" className="form-control">Title</label>
                    <input required autoFocus type="text" className="form-control" id="title" value={post.title} 
                            onChange={saveNewPost
                            // (evt) => {
                            //     const copy = {...post} // copying ticket object
                            //     copy.title = evt.target.value //evt.target.value is whatever is currently in the input field
                            //     setPost(copy)
                            //  }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl" className="form-control">Image URL</label>
                    <input required autoFocus type="text" className="form-control" id="imageUrl" value={post.imageUrl}
                    onChange={saveNewPost
                        // (evt) => {
                        //     const copy = {...post} // copying ticket object
                        //     copy.imageUrl = evt.target.value //evt.target.value is whatever is currently in the input field
                        //     setPost(copy)
                        //  }
                         } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption" className="form-control">Caption</label>
                    <input required autoFocus type="text" className="form-control" id="caption" value={post.caption}
                    onChange={saveNewPost
                        // (evt) => {
                        //     const copy = {...post} // copying ticket object
                        //     copy.caption = evt.target.value //evt.target.value is whatever is currently in the input field
                        //     setPost(copy)
                        //  }
                    } />
                </div>
            </fieldset>
            
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary"
            type="submit">
                Add New Post
            </button>
        </form>
    )
}

export default PostForm;