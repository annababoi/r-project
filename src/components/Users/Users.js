import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {UserForm} from "../UserForm/UserForm";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAll().then(({data})=> setUsers(data))
        }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            {users.map(user => <User key={user.id} user={user} setUsers={setUsers}/>)}
        </div>
    );
};

export {Users};