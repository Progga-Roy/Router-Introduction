import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
 const friend = useLoaderData()
 console.log(friend)

    return (
        <div>
          <h1>{friend.name}</h1>
          <h3>City:{friend.address.city}</h3>
        </div>
    );
};

export default FriendDetails;