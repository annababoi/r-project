import React from 'react';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export default Post;