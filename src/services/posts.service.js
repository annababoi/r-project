import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postsService = {
    getAll:()=>axiosService(urls.posts),
    getById:(id, post)=>axiosService(`${urls.posts} ${id}`)
};

export {
    postsService
}