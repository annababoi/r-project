import {axiosService} from "./axios.serxices";
import {urls} from "../config";

const userService = {
    getAll:()=>axiosService.get(urls.users)
}

export {userService}