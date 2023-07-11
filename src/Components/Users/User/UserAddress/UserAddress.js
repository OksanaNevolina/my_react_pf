import React from 'react';
import './UserAddress.css'

const UserAddress = ({user}) => {
    const {address: {street, suite, city}}= user
    return (
        <div className= 'address'>
            <h3>Address</h3>
           <p>street: {street}</p>
           <p>suite: {suite}</p>
           <p>city:{city}</p>
        </div>
    );
};

export default UserAddress;