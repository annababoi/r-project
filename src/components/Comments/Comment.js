import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
const {id, name, postId} = comment;
    return(
        <div>

            <Link to={`/posts/${postId}`}><h3>{name}</h3></Link>
        </div>
    );
};

export default Comment;