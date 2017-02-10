import React, { Component } from 'react';
import Button from './Button';
import VideoPlayer from './VideoPlayer';
import VideoSamples	from '../../../../app-video-samples'

class ButtonBoard extends Component {

	constructor() {
		super();
		this.setVideo = this.setVideo.bind(this);
	    this.buttons = VideoSamples.map((value) =>
	                    <Button key={value.id}
	                    		id={value.id} 
	                    		name={value.name} 
	                    		video={value.video} 
	                    		start={value.start} 
	                    		end={value.end} 
	                    		imageSrc={value.imageSrc}
	                    		/>
	                  );
		
		this.state = { 
			'videoProps': {
				'video': VideoSamples[0].video,
	        	'start': VideoSamples[0].start,
	        	'end': VideoSamples[0].end
			}
		};
	}

	setVideo(props) {
		this.state.videoProps = props.videoProps;
		this.setState(this.state)
	}

    render() {

    	const buttonBoardStyle = {
    		textAlign: 'center'
    	}

        return (
	        <div style={buttonBoardStyle}>
	        	<VideoPlayer videoProps={this.state.videoProps} autoplay='1' rel='0' modest='1'/>
	        	{this.buttons}
	        </div>
        )
    }
}

export default ButtonBoard
