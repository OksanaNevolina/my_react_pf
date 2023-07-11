import React from 'react';
import User from "./User/User";

const Users = ({user,setuserId}) => {

    return (
        <div>
            <User key = {user.id}
                  user = {user}
                  setuserId = {setuserId} />
        </div>
    );
};

export default Users;