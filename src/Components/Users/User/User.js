import React from 'react';
import UserDetails from "./UserDetails/UserDetails";
import UserAddress from "./UserAddress/UserAddress";
import Company from "./Company/Company";
import './User.css'

const User = ({user,setuserId}) => {
    return (
        <div className='userWrap'>
          <UserDetails key = {user.id} user = {user}/>
          <UserAddress key = {user.id} user = {user}/>
          <Company key = {user.id} user = {user}/>
            <button onClick={()=>setuserId(user.id)}>show posts</button>
        </div>
    );
};

export default User;