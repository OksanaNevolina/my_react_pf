import React, {useEffect, useState} from 'react';
import Users from "./Components/Users/Users";
import UsersPosts from "./Components/UsersPosts/UsersPosts";
const App = () => {
    const [users, setUsers]= useState([])
    useEffect(()=>{
        fetch(' https://jsonplaceholder.typicode.com/users')
            .then(rev =>rev.json())
            .then(users=>{
                setUsers(users)
            })
    },[])
    const [userId, setuserId] = useState(null)
  return (
      <div className= 'wrrrrap'>
          <div>{users.map((user)=>
              <Users
                  key = {user.id}
                  user = {user}
                  setuserId = {setuserId}

              />)}</div>

          <div>{userId && <UsersPosts  userId = {userId}/>}</div>

      </div>
  );
};

export default App;
