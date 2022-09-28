import React from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../../services/api.service";
import {useEffect, useState} from "react";

const Post = () => {
    const {postId} = useParams();

    let postsService = new ApiService('posts/')
    const [posts, SetPosts] = useState([]);


    useEffect(() => {
        postsService.getSingleData(postId).then(value => SetPosts(value))
    }, [postId])
    return (
        <div>
            <h3>{posts.title}</h3>
            <hr/>
        </div>
    );
};

export default Post;