import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getAll:()=>axiosService(urls.users),
    create:(user)=>axiosService.post(urls.users, user),
    getById:(id, car)=>axiosService(`${urls.users}/${id}`)
}

export {userService}