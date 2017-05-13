import React, { Component } from 'react';
import ButtonBoard from './catchphrases/components/ButtonBoard';

class CatchphrasesApp extends Component {

    render() {
        return (
            <div className='bodyContainer'>
                <ButtonBoard isAdm={true} />
            </div>
        )
    }
}

export default CatchphrasesApp;
