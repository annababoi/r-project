const SingleUserDetails = ({user}) => {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    );
};

export {SingleUserDetails};