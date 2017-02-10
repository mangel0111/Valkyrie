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
                'background': '#64a62e',
                'width': 16,
                'height': 16,
                'border-radius': 16,
                'text-indent': 25,
                'text-transform': 'capitalize',
                'margin-top': 10
            },
            stOther: {
                'background': 'yellow',
                'width': 16,
                'height': 16,
                'border-radius': 16,
                'text-indent': 25,
                'text-transform': 'capitalize',
                'margin-top': 10
            }
        }
        return (
            <div style={styles.container}>
                <div style={styles.details}>
                    <label>
                        <strong>{this.props.regression.name}</strong> - {this.props.regression.stack.name} - {this.props.regression.createdBy ? this.props.regression.createdBy.profile.name : 'Master'}
                    </label>
                    <div style={(this.props.regression.state == 'LIVE') ? styles.stLive : styles.stOther}>
                        {this.props.regression.state}
                    </div>
                </div>
            </div>
        );
    }
}

export default RegressionTest;
