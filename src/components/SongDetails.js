import React from "react";

function SongDetails({ track, children }) {
    return ( 
    <p> 
        <strong>Title:</strong> {track.title} 
        <br></br> 
        <strong>Artist:</strong> {track.artist} 
        <br></br> 
        <strong>Tempo:</strong> {track.tempo}
        <br></br> 
        {children}
    </p>
    )
}

export default SongDetails;