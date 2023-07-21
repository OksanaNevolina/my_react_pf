import React, {useEffect, useState} from 'react';
import {apiService} from "../../services/ApiService";



const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect((data)=>{
        apiService.todosAxios(data)
        fetch( 'https://jsonplaceholder.typicode.com/todos')
            .then(rev=>rev.json())
            .then(todos =>setTodos(todos) )
    },[])
    return (
        <div>
            {todos.map(todos=>{
                console.log(todos)
                return <div key={todos.userId} style={{background:'yellow'}}>
                    <h2>userId : {todos.userId}</h2>
                    <h2>id : {todos.id}</h2>
                    <h5>title : {todos.title}</h5>
                    <p>completed : {todos.completed}</p>
                </div>
            })}
        </div>
    )
}

export default Todos;