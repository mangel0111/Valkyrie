import React, { Component } from 'react';

class Button extends Component {

	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			videoProps: {
				'video': props.video,
				'start': props.start,
				'end': props.end	
			},
			imgSrc: props.imageSrc
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let parent = this._reactInternalInstance._currentElement._owner._instance;
		return parent.setVideo({'videoProps': this.state.videoProps});
	}

    render() {

		const buttonSize = '80px';
		const textAndBorderColor = 'rgba(0,0,0,0.8)';

		const buttonStyle = {
			display: 'inline-block',
			margin: '10px',
			paddingTop: '10px',
			backgroundColor: 'white',

    		borderRadius: '5px',

		}

		const buttonIconStyle = {
			color: 'black',
			height: buttonSize,
			width: buttonSize,
			lineHeight: buttonSize,
			
			boxShadow: '0px 3px 0px 0px rgb(34,34,34), 0px 7px 10px 0px rgb(17,17,17), inset 0px 1px 1px 0px rgba(250, 250, 250, .2), inset 0px -12px 35px 0px rgba(0, 0, 0, .5)',
			
			borderRadius: '50%',
			border: '0px solid #000000',
			backgroundImage: 'url(' + this.props.imageSrc + ')',
			backgroundSize: 'auto 100%',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			margin: 'auto'
		};

		const buttonNameStyle = {
			width: buttonSize,
			height: '40px',

			textAlign: 'center',
			wrapText: 'break-word',
  			overflow: 'hidden',
    		fontSize: '12px',
    		color: 'white',

		}

		const buttonNameWrapperStyle = {
			
			marginTop: '20px',

    		backgroundColor: textAndBorderColor,
    		padding: '15px',

    		border: '0px solid ' + textAndBorderColor,
    		borderRadius: '0px 0px 2px 2px',
		}

        return (
        	<div id={this.props.id} style={buttonStyle}>
				<div style={buttonIconStyle} onClick={this.handleClick}/>
				<div style={buttonNameWrapperStyle}>
					<div style={buttonNameStyle}>{this.props.name}</div>
				</div>
        	</div>
        )
    }
}

export default Button
