import React from 'react';
import {users} from './array';
import UserComponentList from "./User_component_list";

const Users = () => {
    return (
        <div>
            {users.map((user) =>( <UserComponentList user = {user}/>))}

        </div>
    );
};

export default Users;