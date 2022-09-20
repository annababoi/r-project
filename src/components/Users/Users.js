import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../User/User";


const Users = ({getUser}) => {
    let [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAll().then(({data}) => {
            const filter = data.filter(user => user.id < 5);
            setUsers(filter);
        })
        }, []
    )
    return (
        <div>
            {users.map(user=><User key = {user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export  {Users};