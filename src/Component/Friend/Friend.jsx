import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';
import FriendDetails from '../FriendDetails/FriendDetails';
const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <h5>Mobile: {friend.phone}</h5>
            <Link to={`/friend/${friend.id}`}>Show friend detail</Link>
            {/* {
                friend.map(frnd=><FriendDetails frnd={frnd}></FriendDetails>)
            } */}
        </div>
    );
};

export default Friend;