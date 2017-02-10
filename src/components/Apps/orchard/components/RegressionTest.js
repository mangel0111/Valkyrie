import React, { Component } from 'react';

class RegressionTest extends React.Component {

    constructor() {
        super();
    }

    render() {
        let styles = {
            container: {
                padding: '15px',
                border: '1px solid rgba(0, 0, 125, 0.5)',
                borderTop: '15px solid rgba(0, 0, 125, 0.3)',
                borderRadius: '5px',
                marginBottom: '10px'
            },
            details: {
                marginLeft: '10px',
                marginBottom: '20px',
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
