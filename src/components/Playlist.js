import React, { useState } from 'react';
import Select from 'react-select';
import TrackList from './TrackList';

function Playlist({ playlists, user, searchTerm }) { 
    console.log(playlists)
    const [playlist, setPlaylist] = useState(false)

    const handleChange = playlist => {
        setPlaylist(playlist)
    }

    const addTrack = trackObj => {
        const updatedPlaylist = playlist.tracks.push(trackObj)
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
        <Select options={playListOptions} onChange={(playlist) => handleChange(playlist)}/>
        {playlist && 
            <TrackList tracks={playlist.tracks} playlists={playlists} selected={playlist} user={user} addTrack={addTrack} searchTerm={searchTerm}/>
        }
        </div>
    )
}

export default Playlist