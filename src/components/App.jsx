import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYoutube.js';
import VideoDetails from './VideoDetails.js';
// import fakeVideoData from '../data/fakeVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {


      //replace the previous exampleVideoData with an empty array to pass rendering live data from youtube test in spec runner.
      videos: [],
      //initial setting: first video of the video list.
      currentVideo: exampleVideoData[0],

      // play: false

    };

    this.selectCurrentVideo = this.selectCurrentVideo.bind(this);
    this.searchVideos = this.searchVideos.bind(this);



  }


  //when video title clicked, the video player will display clicked video.
  selectCurrentVideo(event, video) {
    event.preventDefault();
    this.setState({
      currentVideo: video
    });
  }


  // onVideoToggleBtnClick(event, video) {
  //   event.preventDefault();
  //   this.setState({
  //     currentVideo: video,

  //   });

  // }


  searchVideos(query) {
    searchYouTube(query, (data) => {
      event.preventDefault();
      this.setState({
        currentVideo: data[0],
        videos: data
      });

    });
  }


  componentDidMount() {
    searchYouTube('cocomelon', (data) => {
      event.preventDefault();
      this.setState({
        videos: data,
        currentVideo: data[0]
      });

    });

  }






  render() {

    // var debouncedSearch = _.debounce(this.videoSearch, 500);
    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              {/* debounce ajax request to happen at most once per 500ms. Checked with setting the time to 5000ms and looks working */}
              <Search videoSearch = {_.debounce(this.searchVideos, 1000)} />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo}/>

            </div>
            <div>
              <VideoDetails
                video={this.state.currentVideo}


              />

            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList

                videos={this.state.videos}
                videoSelect = {this.selectCurrentVideo}



              />
            </div>
          </div>
        </div>
      </div>






    );
  }



}


















// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />

//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer videos={exampleVideoData}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
