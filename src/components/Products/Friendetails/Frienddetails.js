import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const { name, phone }= friend
    console.log(friend);
    return (
        <div>
            <h1>this is friend details</h1>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetails;