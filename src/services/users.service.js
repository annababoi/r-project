import {axiosService} from "./axios.service";
import {urls} from "../configs";

const usersService = {
    getAll:()=>axiosService(urls.users),
    getById:(id)=>axiosService(`${urls.users}/${id}`)
};

export {
    usersService
}