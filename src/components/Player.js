import React from "react";
import ReactAudioPlayer from 'react-audio-player';

function Player() {
    return (
    <ReactAudioPlayer
    src="http://res.cloudinary.com/duajhjs2k/video/upload/v1616199513/my_folder/z9pnjqcqrrhwetu9dolp.mp3"
    autoPlay
    controls
    />
    )
}

export default Player;