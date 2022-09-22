import React from 'react';
import {commentService} from "../../services";



const Comment = ({comment, setComments}) => {
    const {id, name} = comment;



    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
        </div>
    );
};

export {Comment};