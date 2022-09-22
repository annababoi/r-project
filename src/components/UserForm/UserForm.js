import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services";





const UserForm = ({setUsers}) => {
const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm();

    const submit = async (user) => {
    const {data} = await userService.create(user)
        setUsers(users=>[...users, data])
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export {UserForm};