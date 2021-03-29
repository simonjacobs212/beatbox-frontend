import React from "react";
import TrackList from "./TrackList"

function Tracks({ tracks, searchTerm, updateTracks }) {
    return <TrackList tracks={tracks} searchTerm={searchTerm} updateTracks={updateTracks}/>
}

export default Tracks;
