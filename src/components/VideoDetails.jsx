// import exampleVideoData from '../data/exampleVideoData.js';

var VideoDetails = (props) => (
  <div className="video-details">

    <div >
      <h4>More Video details</h4>
      <div> Channel:  {props.video.snippet.channelTitle}</div>
      {/* the ISO time need to be changed to the local time format */}
      <div> Publish Time: {props.video.snippet.publishTime}</div>
    </div>

  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoDetails.propTypes = {
  video: PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoDetails;
