import React from 'react';

const AudioPlay = ({ audio }) => {

  return (
    <audio src={audio} autoPlay></audio>
  )
}

export default AudioPlay
