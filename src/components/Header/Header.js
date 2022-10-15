import {useSelector} from "react-redux";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);
    return (
        <div>
            {currentUser&&currentUser.name}
            <hr/>
            {currentPost&&currentPost.title}
            <hr/>
        </div>
    );
};

export {Header};