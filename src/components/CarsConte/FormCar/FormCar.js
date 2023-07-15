import React, {useState} from 'react';
import './FormCar.css'

const FormCar = ({setOnSave}) => {
    const inst = {
        brand :'',
        price:'',
        year:''
    }
    const [car, setCar]= useState(inst);
    const inputChench = (e) => {
    setCar(prevState => ({...prevState,[e.target.name]:e.target.value}))
    }
    const save = (e) => {
        e.preventDefault()
        fetch('http://owu.linkpc.net/carsAPI/v1/cars',
            {method:'POST',
                body:JSON.stringify(car),
                headers:{'content-type':'application/json'}
            })
            .then(value => value.json())
            .then(() => {
                setOnSave(prevState=>!prevState)
                setCar(inst)
            })

    }
    return (
        <form className='formCar' onSubmit={save}>
            <label ><br/>brand<input type="text" value={car.brand} name={'brand'} onChange={inputChench}/></label>
            <label ><br/>price<input type="number" value={car.price} name={'price'} onChange={inputChench}/></label>
            <label ><br/>year<input type="number" value={car.year} name={'year'} onChange={inputChench}/></label>
             <br/><button>save</button>
        </form>
    );
};

export default FormCar;