import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const ShowPost = () => {
    const showPost = useLoaderData()
    const navigate = useNavigate()
     const handleToBack =()=>{
       navigate(-1)
     }
    return (
        <div>
            <h3>Title: {showPost.title}</h3>
            <p>Id:{showPost.id}</p>
            <p> userId:{showPost.userId}</p>
            <p>Body: {showPost.body}</p>
            <button onClick={handleToBack}>Back to post</button>
        </div>
    );
};

export default ShowPost;