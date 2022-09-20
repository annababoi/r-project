import React, {useEffect, useState} from 'react';

import {ApiService} from "../../services/api.service";
import Post from "./Post";
import comment from "../Comments/Comment";
import post from "./Post";

const Posts = () => {
    let postsService = new ApiService(`posts/`)
    const [posts, SetPosts] = useState([]);

    useEffect(()=>{
        postsService.getAllData().then(value => SetPosts(value))
    }, [])
    return (
        <div>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;