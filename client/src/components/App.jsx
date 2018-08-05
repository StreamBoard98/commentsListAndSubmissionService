import React from 'react';
import $ from 'jquery';
import CommentsList from './CommentsList'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    const currentSongId = global.window.location.pathname.substring(7);
    this.getComments(currentSongId);
  }

  getComments(songId) {
    $.get(`http://ec2-54-215-208-128.us-west-1.compute.amazonaws.com/songs/${songId}`, null, (data) => {
      let songComments;
      if(!songComments) {
        let random = Math.floor(Math.random() * data.length);
        songComments = data.slice(random, data.length);
      }
      this.setState({
        comments: songComments,
      });
    });
  }

  render () {
    return (
      <div>
        <div>
          <p> <i className="fas fa-comment-alt"></i> {this.state.comments.length} comments </p>
        </div>
        <CommentsList commentsList={this.state.comments}/>
      </div>
    );
  }
}

export default App; 
