import React from "react";
import ReactAudioPlayer from 'react-audio-player';

function Player({ track }) {
    return (
        <ReactAudioPlayer
            src={track.file_url}
            autostart="false"
            controls
        />
    )
}

export default Player;