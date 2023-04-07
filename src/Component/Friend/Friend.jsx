import React from 'react';
import './Friend.css'
const Friend = ({friend}) => {
    return (
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>{friend.email}</p>
            <h5>Mobile: {friend.phone}</h5>
        </div>
    );
};

export default Friend;