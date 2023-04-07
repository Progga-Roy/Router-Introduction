import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowPost = () => {
    const showPost = useLoaderData()

    return (
        <div>
            <h3>Title: {showPost.title}</h3>
            <p>Id:{showPost.id}</p>
            <p> userId:{showPost.userId}</p>
            <p>Body: {showPost.body}</p>
        </div>
    );
};

export default ShowPost;