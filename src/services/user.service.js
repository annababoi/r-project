import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getAll:()=>axiosService(urls.users),
    getById:()=>axiosService(`${urls.users}/${id}`)
}

export {
    userService
}