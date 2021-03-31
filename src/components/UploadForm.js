import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

const tracksAPI = "http://localhost:3000/tracks"

const UploadForm = ({ user, setTracks, tracks }) => {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [tempo, setTempo] = useState("")
  const [key, setKey] = useState("")
  const [uploadedTrack, setUploadedTrack] = useState(false)

  const successCallBack = data => {
      setUploadedTrack(data.info.url)
      fetchTempo(data.info.url)
      fetchKey(data.info.url)
  }

  const failureCallBack = _ => {
      console.log("You fucked up")
  }


  const fetchTempo = url => {
    var accessId = "8622af9b-8f4b-4a14-8e90-a41069e58dee";
    var fetchUrl = "https://api.sonicAPI.com/analyze/tempo?" + `access_id=${accessId}` + `&blocking=true` + `&format=json` + `&input_file=${url}`

    //https://api.sonicAPI.com/analyze/tempo?access_id=8622af9b-8f4b-4a14-8e90-a41069e58dee&blocking=true&format=json&input_file=http://res.cloudinary.com/duajhjs2k/video/upload/v1616701480/my_folder/xb6jai86fxs2lagtkqdg.mp3

    fetch(fetchUrl)
    .then(r => r.json())
    .then(data => setTempo(data.auftakt_result.overall_tempo))
}

  const fetchKey = url => {
    var accessId = "8622af9b-8f4b-4a14-8e90-a41069e58dee";
    var fetchUrl = "https://api.sonicAPI.com/analyze/key?" + `access_id=${accessId}` + `&blocking=true` + `&format=json` + `&input_file=${url}`

    //https://api.sonicAPI.com/analyze/tempo?access_id=8622af9b-8f4b-4a14-8e90-a41069e58dee&blocking=true&format=json&input_file=http://res.cloudinary.com/duajhjs2k/video/upload/v1616701480/my_folder/xb6jai86fxs2lagtkqdg.mp3

    fetch(fetchUrl)
    .then(r => r.json())
    .then(data => setKey(data.tonart_result.key))
  }

  const addNewTrack = track => {
    const updatedTracks = [...tracks, track]
    setTracks(updatedTracks)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newTrack = {
      user_id: user.id,
      tempo: Math.round(tempo).toPrecision(2),
      key: key,
      title: title,
      artist: artist,
      file_url: uploadedTrack,
    }

    fetch(tracksAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrack)
    })
    .then(r => r.json())
    .then(track => {
      addNewTrack(track)
      setTitle("")
      setArtist("")
      setUploadedTrack(false)
      history.push("/tracks")
    })
  }


  return (
    <>
      <WidgetLoader />  
      <Widget
      // eslint-disable-next-line
        sources={['local']} // set the sources available for uploading -> by default
        // all sources are available. More information on their use can be found at 
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        // sourceKeys={{dropboxAppKey: '1dsf42dl1i2', instagramClientId: 'd7aadf962m'}} // add source keys 
        // and ID's as an object. More information on their use can be found at 
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        resourceType={'auto'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
        cloudName={'duajhjs2k'} // your cloudinary account cloud name. 
        // Located on https://cloudinary.com/console/
        uploadPreset={'kwu7fndg'} // check that an upload preset exists and check mode is signed or unisgned
        buttonText={'Upload Files'} // default 'Upload Files'
        style={{
              color: 'white',
              border: 'none',
              width: '120px',
              backgroundColor: 'black',
              borderRadius: '4px',
              height: '25px',
            }} // inline styling only or style id='cloudinary_upload_button'
        folder={'my_folder'} // set cloudinary folder name to send file
        cropping={false} // set ability to crop images -> default = true
        onSuccess={successCallBack} // add success callback -> returns result
        onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
        logging={false} // logs will be provided for success and failure messages, 
        // set to false for production -> default = true
        // customPublicId={'false'} // set a specific custom public_id. 
        // To use the file name as the public_id use 'use_filename={true}' parameter
        eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
        use_filename={true} // tell Cloudinary to use the original name of the uploaded 
        // file as its public ID -> default = true,

        // 👇 FOR SIGNED UPLOADS ONLY 👇

        // generateSignatureUrl={'http://my_domain.com/api/v1/media/generate_signature'} // pass the api 
        // // endpoint for generating a signature -> check cloudinary docs and SDK's for signing uploads
        // apiKey={273872962667853} // cloudinary API key -> number format
        // accepts={'application/json'} // for signed uploads only -> default = 'application/json'
        // contentType={'application/json'} // for signed uploads only -> default = 'application/json'
        // withCredentials={true} // default = true -> check axios documentation for more information
        // unique_filename={true} // setting it to false, you can tell Cloudinary not to attempt to make 
        // // the Public ID unique, and just use the normalized file name -> default = true
      />
        {uploadedTrack &&
          <form onSubmit={handleSubmit}>
            <h3>Your track has been uploaded! Please fill out the form below and click submit to save to the database:</h3>
            <label htmlFor="title">Track Title:</label>
            <input type="text" name="title" onChange={(event) => setTitle(event.target.value)}/><br></br>
            <label htmlFor="artist">Track Artist:</label>
            <input type="text" name="artist" onChange={(event) => setArtist(event.target.value)}/><br></br>
            <input type="submit" value="Submit"/>
          </form>
        }
    </>
  )
}

export default UploadForm;