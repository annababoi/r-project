import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {commentService} from "../../services";





const CommentForm = ({setComments}) => {
const {register, handleSubmit, reset, formState:{errors, isValid}} = useForm();

    const submit = async (comment) => {
    const {data} = await commentService.create(comment)
        setComments(comments=>[...comments, data])
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

export {CommentForm};