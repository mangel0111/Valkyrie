import React, { Component } from 'react';
import ButtonBoard from './catchphrases/components/ButtonBoard';

var isAdm = false;

class CatchphrasesApp extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='bodyContainer'>
                <ButtonBoard isAdm={true} />
            </div>
        )
    }
}

export default CatchphrasesApp;
