import React, { useState } from 'react';
import Select from 'react-select';
import TrackList from './TrackList';

function Playlist({ playlists, user, searchTerm }) { 
    const [playlist, setPlaylist] = useState(null)
    console.log("selected playlist",playlist)

    const handleChange = playlist => {
        setPlaylist(playlist)
    }

    const addTrack = trackObj => {
        console.log(trackObj.track)
        const updatedPlaylist = {
            ...playlist,
            tracks: [...playlist.tracks, trackObj.track]
        }
        setPlaylist(updatedPlaylist)
    }

    const playListOptions = playlists.map((playlist) => {
        return {
            value: playlist.id,
            label: `${playlist.name}`,
            tracks: playlist.tracks,
            tempo: playlist.tempo
        }
    })
    
    return  (
        <div>
        <Select options={playListOptions} onChange={(playlist) => handleChange(playlist)} value={playlist && playlist.label}/>
        {playlist && 
            <TrackList tracks={playlist.tracks} playlists={playlists} playlist={playlist} user={user} searchTerm={searchTerm} setPlaylist={setPlaylist} addTrack={addTrack}/>
        }
        </div>
    )
}

export default Playlist