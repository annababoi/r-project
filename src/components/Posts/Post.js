import React from 'react';
import {useParams} from "react-router-dom";
import {ApiService} from "../../services/api.service";
import {useEffect, useState} from "react";

const Post = () => {
    const {id} = useParams();
    console.log(id);

    let postsService = new ApiService('posts/')
    const [posts, SetPosts] = useState([]);


    useEffect(() => {
        postsService.getSingleData(id).then(value => SetPosts(value))
    }, [id])
    return (
        <div>
            <h3>{posts.title}</h3>
        </div>
    );
};

export default Post;