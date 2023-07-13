import React, {useEffect, useRef} from 'react';
import './page.css'

const Page = () => {
    const nameRef = useRef('')
    const usernameRef = useRef('')
    const emailRef = useRef('')
    const phoneRef = useRef('')
    useEffect(()=>{
        console.log('assdsdas')
    })

    const hendleSubmit = (e)=> {
        e.preventDefault()
        console.log(nameRef.current.value,usernameRef.current.value,emailRef.current.value,phoneRef.current.value)
        fetch('https://jsonplaceholder.typicode.com/users',
            {method :'POST',
                body: JSON.stringify({
                    name:nameRef.current.value,
                    username:usernameRef.current.value,
                    email:emailRef.current.value,
                    phone:phoneRef.current.value
            }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(res=> res.json())
            .then(value => console.log(value))
    }


    return (
        <div>
            <form className= 'wrap' onSubmit={hendleSubmit}>
                <label>
                    <br/>
                   name
                    <br/>
                    <input type="text" ref={nameRef}/>
                </label>
                <label>
                    <br/>
                    username
                    <br/>
                    <input type="text"  ref={usernameRef}/>
                </label>
                <label>
                    <br/>
                    email
                    <br/>
                    <input type="email" ref={emailRef} />
                </label>
                <label>
                    <br/>
                    phone
                    <br/>
                    <input type="number" ref={phoneRef}/>
                </label>
                <br/>
                <input className='log' type="submit" value='login'/>

            </form>

        </div>
    );
};

export default Page;