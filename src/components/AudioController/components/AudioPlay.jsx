import React from 'react';

const AudioPlay = ({ audio }) => {
  return (
    <audio src={`../../../assets/audio/${audio}`} autoPlay></audio>
  )
}

export default AudioPlay
