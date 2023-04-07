import React from 'react';
import './SinglePost.css'
import { Link, useNavigate } from 'react-router-dom';

const SinglePost = (props) => {
    const {userId,id}= props.singlePost;
    const navigate = useNavigate()
     const handleNavigation=() =>{
      navigate(`/post/${id}`)
     }
    return (
        <div className='s-post'>
          <button>USERID :{userId} <Link to={`/post/${id}`}>show detail</Link></button>
          <button onClick={handleNavigation}>With Handle Navigation</button>
          
        </div>
    );
};

export default SinglePost;