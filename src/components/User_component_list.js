import React from 'react';
import "./Users.css"

const UserComponentList = (props) => {
    const {user} = props

    return (
        <div className= "divzzz">
            <h2>{user.name}</h2>
            <h3>{user.age}</h3>
        </div>
    );
};

export default UserComponentList;