import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getAll:()=>axiosService(urls.comments),
    getById:(id, comment)=>axiosService(`${urls.comments} ${id}`)
};

export {
    commentsService
}