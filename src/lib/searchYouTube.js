import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',

    data: {
      q: query,
    },
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      callback(data);
    },
    error: function(error) {
      console.error('recast.ly: Failed to fetch videos', error);
    }
  });

};

export default searchYouTube;
