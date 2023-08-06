import React, {Component} from 'react';
import Car from "../Car/Car";
import {carsApiService} from "../../services/carsApiService";

class Cars extends Component {
    constructor(props) {
        super(props);
        this.state={
            cars:[]
        }
    }

    componentDidMount() {
        carsApiService.getAll().then(({data})=>this.setState({cars:data}))
    }

    render() {
        return (
            <div>
                <h1>list</h1>
                {this.state.cars.map(car=><Car key={car.id} car={car}/>)}

            </div>
        );
    }
}

export default Cars;