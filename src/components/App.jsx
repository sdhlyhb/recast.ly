import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {


      videos: exampleVideoData,
      //initial setting: first video of the video list.
      currentVideo: exampleVideoData[0]

    };

    // this.onVideoTitleClick = this.onVideoTitleClick.bind(this);

  }


  //when video title clicked, the video player will display clicked video.
  onVideoTitleClick(event, video) {
    event.preventDefault();
    this.setState({
      currentVideo: video
    });

  }





  render() {

    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo}/>

            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList

                videos={this.state.videos}
                titleClick = {this.onVideoTitleClick.bind(this)}


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