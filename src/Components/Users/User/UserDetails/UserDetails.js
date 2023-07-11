import React from 'react';
import './UserDetails.css'

const UserDetails = ({user}) => {
    const {id,name,username,email,phone,website} = user
    return (
        <div className= 'userInfo'>
              <h1>id : {id}</h1>
              <h3>{name} {username}</h3>
              <h4>{email }</h4>
              <h4>{phone }</h4>
              <h5>{website }</h5>
        </div>
    );
};

export default UserDetails;