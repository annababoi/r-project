import {postActions} from "../../redux";
import {useDispatch} from "react-redux";


const Post = ({post}) => {

    const dispatch = useDispatch();

    const {id, title, body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={()=>dispatch(postActions.setCurrentPost(post))}>select Post</button>
            <button onClick={()=>dispatch(postActions.deleteCurrentPost(id))}>delete</button>
        </div>
    );
};

export {Post};