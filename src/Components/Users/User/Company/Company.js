import React from 'react';
import './Company.css'

const Company = ({user}) => {
    const {company: {name, catchPhrase, bs}} = user
    return (
        <div className='comp'>
            <h3>Company</h3>
            <h5>name: {name}</h5>
            <h5>catchPhrase: {catchPhrase}</h5>
            <h5>bs: {bs}</h5>
        </div>
    );
};

export default Company;