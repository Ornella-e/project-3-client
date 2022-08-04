 /* rfce */
import React, { useState } from 'react'
import MapGL from 'react-map-gl';


function Map() {
    const [viewport,setViewport] = useState({
        width: '100%',
        height: '100%',
        longitude: -100,
        latitude: 40,
        zoom: 3.1,

    })
  return (
    <MapGL 
        mapStyle='mapbox://styles/joaobeyer/cl6fepghe001u14paeihopsho'
        mapboxAccessToken="pk.eyJ1Ijoiam9hb2JleWVyIiwiYSI6ImNsNmZlZDN2bjAxbWkzY283ZDR4bml2eWEifQ.7dQxq-ZtcXASmpNvdh-z0A"
        {...viewport}

    ></MapGL>
  )
}

export default Map 