import React from 'react';

const Review = (props) => {
    const { productId, username,  review, date,rating } = props.review;
    console.log(productId)
    
    return (
        <div>
            <h1>{username}</h1>
            <h1>{review}</h1>
            <h1>{date}</h1>
        </div>
    );
};

export default Review;