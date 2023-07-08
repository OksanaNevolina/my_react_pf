import React, {useState,useEffect} from 'react';
import Launch from "./Launsh/Launch";

const Launches = () => {
    const [launches, setLaunches]= useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((res) => res.json())
            .then(value=>{
                const filter =  value.filter(item => item.launch_year !== '2020');
                setLaunches(filter)
            })
    },[])
    return (
        <div>
            {launches.map(launch => <Launch
                key = {launch.launch_date_unix}
                launch = {launch}/>)}
            
        </div>
    );
};

export default Launches;