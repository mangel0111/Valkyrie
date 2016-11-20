import React, { Component } from 'react';
import Dashboard from './e2e/components/Dashboard';

var isAdm = false;

class E2E extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='bodyContainer'>
                <Dashboard isAdm={true} />
            </div>
        )
    }
}

export default E2E;
