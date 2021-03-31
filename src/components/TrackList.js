import React from "react";
import PlayerContainer from "./PlayerContainer"

function TrackList({ tracks, playlists, playlist, user, searchTerm, updateTracks, setPlaylist, addTrack  }) {
    // const trackList = tracks?.map((track) => <PlayerContainer track={track} playlists={playlists} playlist={playlist} user={user} addTrack={addTrack}/>)

    const filteredTracks = tracks?.filter((track) => {
        return track[searchTerm?.attribute]?.toLowerCase().includes(searchTerm?.string.toLowerCase())
      })
      const trackList = filteredTracks?.map((track) => <PlayerContainer track={track} playlists={playlists} playlist={playlist} user={user} updateTracks={updateTracks} setPlaylist={setPlaylist} addTrack={addTrack}/>)

    return (
        <ul> 
            {trackList}
        </ul>
    )
}

export default TrackList;