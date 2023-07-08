import React from 'react';
import './Launch.css'

const Launch = ({launch}) => {
    const {mission_name, launch_year, links:
    {
        mission_patch_small
    }
}
    = launch;

    return (
        <div className='divqqq'>
            <div>{mission_name}</div>
            <div>{launch_year }</div>
                <img src={mission_patch_small} alt={mission_name}/>
                </div>
    );
};

export default Launch;