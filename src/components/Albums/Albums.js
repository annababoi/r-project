import React, {useEffect, useState} from 'react';

import {ApiService} from "../../services/api.service";
import Album from "./Album";

const Albums = () => {
    let albumsService = new ApiService('albums');
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumsService.getAllData().then(value => setAlbums(value))
    },[]);
    return (
        <div>
            {albums.map(album=> <Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;