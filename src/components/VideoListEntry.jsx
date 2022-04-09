var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />


    </div>
    <div className="media-body">
      <button className="toggleBtn" onClick = {(event) => props.videoSelect(event, props.video)}>Play</button>
      <div className="video-list-entry-title"
        onClick = {(event) => {
          props.videoSelect(event, props.video);
          // props.video.id.videoId += '?autoplay=1';
          console.log(props.video.id.videoId);
        }}

      >{props.video.snippet.title}
      </div>



      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
