import React from 'react';
import './JsonplaceholderUsers.css'


const ListJsonplaceholderUsers = (props) => {

    const {user,hendleClick,hendleDelete} = props
    return (
        <div className='divx'>
            <h5> ім'я : {user.name} призвіще : {user.username}</h5>
            <h6> пошта : {user.email}</h6>
            <h6> адреса : {user.address.city}</h6>
            <h6> телефон :{user.phone}</h6>
            <button onClick={() => hendleClick(user.company.name)}>Покажи дані</button>
            <button onClick={() => hendleDelete(user.id)}>Видалити  юзера</button>


        </div>
    );
};

export default ListJsonplaceholderUsers;