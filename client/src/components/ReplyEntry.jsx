import React from 'react';
import styles from '../css-modules/entries.css';
import ReactTimeAgo from 'react-time-ago';

// components
const ReplyEntry = ({username, songtime, text, timestamp}) => {
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
      <div className={styles.replyContent}>
        <div className={styles.avatar}>
          <a href='#'><i className="far fa-user-circle fa-2x"></i></a>
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
    </div>
  )
}

export default ReplyEntry;