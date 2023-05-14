import React from 'react';
import './tweetbox.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1653040744805064705/jTzw6j2X_400x400.jpg" />
          <input placeholder="What's hapenning?" type="text" />
        </div>
        {/* <input placeholder="Optional: Enter Image URL" type="text"
        className="tweetbox_imageinput" /> */}
        <Button className="tweetbox__tweetbtn tweetbtn"> Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
