import React from "react";

function SongDetails({ track, children }) {
    return ( 
    <span class="details"> 
        <strong>Title:</strong> {track.title} 
        <br></br> 
        <strong>Artist:</strong> {track.artist} 
        <br></br> 
        <strong>Tempo:</strong> {track.tempo}
        <br></br> 
        <strong>Key:</strong> {track.key}
        <br></br> 
        {children}
    </span>
    )
}

export default SongDetails;