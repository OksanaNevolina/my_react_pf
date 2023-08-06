import React, {Component} from 'react';
import './Car.css'

class Car extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {id,brand,price,year}= this.props.car;
        return (
            <div className= 'car'>
                <div>id {id}</div>
                <div>brand {brand}</div>
                <div>price {price}</div>
                <div>year {year}</div>

            </div>
        );
    }
}

export default Car;