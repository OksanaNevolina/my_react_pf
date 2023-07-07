import React, {useEffect, useState} from 'react';
import ListJsonplaceholderUsers from "./ListJsonplaceholderUsers";
const JsonplaceholderUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setUsers(users))
        },[]
    )
    const hendleClick = (val) => {
        alert(`користувач працює в ${val}`)
    }
    const hendleDelete = (id) => {
        setUsers([...users].filter((user) => user.id !== id))
    }
    return (
        <div>
            {users.map((user,id) => {
                return <ListJsonplaceholderUsers
                    key = {id}
                    user = {user}
                    hendleClick ={hendleClick}
                    hendleDelete ={hendleDelete}
                />
            })}
        </div>
    );
};

export default JsonplaceholderUsers;