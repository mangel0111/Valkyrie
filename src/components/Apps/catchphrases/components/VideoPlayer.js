import React, { Component } from 'react';

class VideoPlayer extends Component {

	render() {
		let props = this.props;
		let videoProps = props.videoProps;
	    var videoSrc = 
	    	'http://www.youtube.com/embed/' + videoProps.video + 
	    	'?start=' + videoProps.start + 
	    	'&end=' + videoProps.end + 
	    	'&autoplay=' + props.autoplay + 
	    	'&rel=' + props.rel + 
	    	'&modestbranding=' + props.modest +
			'&vq=small';

	    return (
		<div className='container'>
			<iframe className='player' 
					type='text/html' 
					width='50%' height='50%'
					src={videoSrc}
					/>
		</div>
	    );
  	}
}

export default VideoPlayer
