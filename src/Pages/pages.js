import React,{useRef} from 'react';
import './pages.css'

const Pages = () => {
    const idRef = useRef('')
    const nameRef = useRef('')
    const emailRef = useRef('')
    const bodyRef = useRef('')
    const hendleOnSubmitComent = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/comments',
            {method :'POST',
                body: JSON.stringify({
                    id:idRef.current.value,
                    name:nameRef.current.value,
                    email:emailRef.current.value,
                    body:bodyRef.current.value
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
            <form className="formComent" onSubmit={hendleOnSubmitComent}>
                <label>
                    <br/>
                    id
                    <br/>
                    <input type="number" ref={idRef} />
                </label>
                <label>
                    <br/>
                    name
                    <br/>
                    <input type="text"  ref={nameRef}/>
                </label>
                <label>
                    <br/>
                    email
                    <br/>
                    <input type="email" ref={emailRef} />
                </label>
                <label>
                    <br/>
                    body
                    <br/>
                    <input type="text" ref={bodyRef}/>
                </label>
                <br/>
                <input className='comment' type="submit" value='new comment '/>

            </form>

        </div>
    );
};

export default Pages;