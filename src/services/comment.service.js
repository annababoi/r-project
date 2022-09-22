import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentService = {
    getAll:()=>axiosService(urls.comments),
    create:(comment)=>axiosService.post(urls.comments, comment),
    getById:(id, comment)=>axiosService(`${urls.comments}/${id}`)
}

export {commentService}