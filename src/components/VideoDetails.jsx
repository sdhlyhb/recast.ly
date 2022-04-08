// import exampleVideoData from '../data/exampleVideoData.js';
// var d = new Date(props.video.snippet.publishTime);

var VideoDetails = (props) => (


  <div className="video-details">
    <div >
      <h4>More Video details</h4>
      <div id ="chanelInfo"> Channel:  {props.video.snippet.channelTitle}</div>

      <div id="videoPublishDate"> Publish Time: {(new Date(props.video.snippet.publishTime)).toLocaleDateString('en-US')} </div>
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
