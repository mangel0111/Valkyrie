import React, { Component } from 'react';

class RegressionTest extends React.Component {

    constructor() {
        super();
    }

    render() {
        let styles = {
            container: {
                'margin': '20px',
                'padding': '5px',
                'border-left': '5px solid blue'
            },
            details: {
                'margin-left': '10px',
                'margin-bottom': '20px',
            },
            stLive: {
                
            },
            stOther: {
                
            }
        }
        return (
            <div style={styles.container}>
                <div style={styles.details}>
                    <label>
                        <strong>{this.props.regression.name}</strong> - {this.props.regression.stack.name} - {this.props.regression.createdBy ? this.props.regression.createdBy.profile.name : 'Master'}
                    </label>
                    <div className={(this.props.regression.state == 'LIVE') ? 'stLive' : 'stOther'}>
                        {this.props.regression.state}
                    </div>
                </div>
            </div>
        );
    }
}

export default RegressionTest;
