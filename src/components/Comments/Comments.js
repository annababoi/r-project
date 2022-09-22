import React, {useEffect, useState} from 'react';

import {commentService} from "../../services";
import {CommentForm} from "../CommentForm/CommentForm";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=> {
        commentService.getAll().then(({data})=> setComments(data))
        }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            {comments.map(comment => <Comment key={comment.id} comment={comment} setComments={setComments}/>)}
        </div>
    );
};

export {Comments};