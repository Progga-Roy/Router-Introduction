import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';
import './Post.css'

const Post = () => {
    const post =useLoaderData()
    // console.log(post)

    return (
        <div>
            <h2>All the post here....:{post.length}</h2>
          <div className='post'>
          {
            post.map(singlePost=><SinglePost key={singlePost.id} singlePost={singlePost}></SinglePost>)
          }
          </div>
        </div>
    );
};

export default Post;