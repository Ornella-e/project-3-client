import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./Map.css"

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBAOLd6yXR--lNpR3z73Pvf5S0EXu_fIg4"
    })
    const position ={
        lat:52.520008,
        lng:13.404954
    } 
  return (
    <div className='map'>
        {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{widht: '100%', height: '100%'}}
              center={position}
              zoom={10}
            >
            <Marker position={position}/>
             
            </GoogleMap>
        ) : <></>}
        </div>
  )
}

export default Map
