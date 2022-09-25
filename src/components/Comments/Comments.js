import React from 'react';
import {ApiService} from "../../services/api.service";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import Comment from "./Comment";

const Comments = () => {
    let commentsService = new ApiService('comments');
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsService.getAllData().then(value => setComments(value))
    }, []);
    return (


        <div>
            <Outlet/>

            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;