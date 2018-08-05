import React from 'react';
import styles from '../css-modules/entries.css';
import RepliesList from './RepliesList';
import ReactTimeAgo from 'react-time-ago';


// components
const CommentEntry = ({username, songtime, text, timestamp, replies}) => {
  const secondsToTime = (songTime) => {
    songTime = Math.floor(songTime);
    let result;
    let hours = Math.floor(songTime / 3600);
    let minutes = Math.floor(songTime - (hours * 3600)) / 60;
    let seconds = songTime % 60;

    if (hours > 0) {
      result = Math.floor(hours);
      result += `:${(minutes < 10 ? "0" + Math.floor(minutes) : minutes)}`;
      result += `:${(seconds < 10 ? "0" + Math.floor(seconds) : seconds)}`;
    } else {
      result = `${Math.floor(minutes) + ':' + (seconds < 10 ? "0" + Math.floor(seconds) : seconds)}`;
    }
    return result;
  }

  return (
    <div className={styles.entriesContainer}>
      <div className={styles.commentContent}>
      <div className={styles.avatar}>
        <a href='#'>
          <i className="fas fa-user-circle fa-2x"/>
        </a>
      </div>
      <div className={styles.content}>
        <div className={styles.user}>
          <a href='#'>{username}</a> at <a href='#'>{secondsToTime(songtime)}</a>
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
      <div className={styles.rightContainer}>
          <ReactTimeAgo>
            {timestamp}
          </ReactTimeAgo>
          <button className={styles.replyButton}>
            <i className="fas fa-reply fa-lg" />
          </button>
      </div>  
      </div>
      <RepliesList repliesList={replies}/>
    </div>
  )
};

export default CommentEntry;