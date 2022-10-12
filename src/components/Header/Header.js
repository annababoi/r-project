import {useSelector} from "react-redux";

const Header = () => {
    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);
    return (
        <div>
            {currentUser&&currentUser.name}
            {currentPost&&currentPost.title}
        </div>
    );
};

export {Header};