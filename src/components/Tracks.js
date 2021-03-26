import React from "react";
import TrackList from "./TrackList"

function Tracks({ tracks, searchTerm }) {
    return <TrackList tracks={tracks} searchTerm={searchTerm}/>
}

export default Tracks;
