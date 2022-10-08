import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <div>{user.name} -- {user.email}</div>
            <span><Link to={user.id.toString()}>SingleUser</Link></span>
        </div>
    );
};

export {User};