import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {LOAD_SINGLE_USER} from "../../redux";
import {SingleUserPage} from "../../pages";
import {SingleUserDetails} from "../singleUserDetails/SingleUserDetails";

const SingleUser = () => {

    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

   const {id} = useParams();

   useEffect(() => {
       dispatch({type:LOAD_SINGLE_USER, payload: +id})
   },[id]);

    return (
        <div>
            {user && (<SingleUserDetails key={user.id} user={user}/>)}
        </div>
    );
};

export {SingleUser};