import React from "react";
import PlayerContainer from "./PlayerContainer"

function TrackList({ tracks, playlists, selected, addTrack, user, searchTerm  }) {
    console.log(searchTerm)
    // const trackList = tracks?.map((track) => <PlayerContainer track={track} playlists={playlists} selected={selected} user={user} addTrack={addTrack}/>)

    const filteredTracks = tracks?.filter((track) => {
        return track[searchTerm?.attribute].toLowerCase().includes(searchTerm?.string.toLowerCase())
      })
      const trackList = filteredTracks?.map((track) => <PlayerContainer track={track} playlists={playlists} selected={selected} user={user} addTrack={addTrack}/>)

    return (
        <ul> 
            {trackList}
        </ul>
    )
}

export default TrackList;