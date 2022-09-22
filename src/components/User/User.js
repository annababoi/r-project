import React from 'react';
import {userService} from "../../services";



const User = ({user, setUsers}) => {
    const {id, name} = user;



    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
        </div>
    );
};

export {User};