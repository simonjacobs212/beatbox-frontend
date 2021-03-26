import React from "react";
import UploadForm from "./UploadForm"

function UserHome({userObj, setTracks, tracks}) {
    return <UploadForm user={userObj} setTracks={setTracks} tracks={tracks}/>
}

export default UserHome;