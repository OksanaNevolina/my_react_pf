import React from 'react';
import './Todo.css'

const Todo = ({todo}) => {
    const {id,title} = todo;
    return (
        <div className='todo'>
          <div>id :{id}</div>
          <div>title : {title}</div>
            <br/>
            <hr/>

        </div>
    );
};

export default Todo;