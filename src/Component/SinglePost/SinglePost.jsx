import React from 'react';
import './SinglePost.css'
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
    const {userId,id}= props.singlePost
    return (
        <div className='s-post'>
          <button>USERID :{userId} <Link to={`/post/${id}`}>show detail</Link></button>
          
        </div>
    );
};

export default SinglePost;