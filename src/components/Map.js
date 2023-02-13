import React, { useState } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import HomeIcon from '@mui/icons-material/Home';
import { common, deepPurple } from '@mui/material/colors';
import getCenter from 'geolib/es/getCenter';

import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/Map.css';


export default function Map(props) {

  const coordinates = props.properties.map(result => ({
    longitude: result.coord_long,
    latitude: result.coord_lat
  }));
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 4,
  })

  const handleDrag = (lngLat) => {
    setViewport({
      ...viewport,
      longitude: lngLat.viewState.longitude,
      latitude: lngLat.viewState.latitude,
    });
  };

  const handleZoom = (lngLat) => {
    setViewport({
      ...viewport,
      zoom: lngLat.viewState.zoom
    });
  }

  const handleClick = (result) => {
    const w = window.open();
    w.location.href = `/properties/${result.id}`
  }

  return (
    <div className='maphub'>
      <ReactMapGl
        key={props.coord_lat}
        {...viewport}
        // mapStyle='mapbox://styles/sszyh/cldhrjovw001101pf4aqwogcp'
        mapStyle='mapbox://styles/imdodds/cle3c6zuz000201ldo03vnepi'
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onDrag={handleDrag}
        onZoom={handleZoom}
      >

        {props.properties.map(result => (
          <div key={result.id}>
            <Marker
              longitude={result.coord_long}
              latitude={result.coord_lat}
              offsetLeft={-20}
              offsetTop={-10} >

              <div
                onClick={() => handleClick(result)}
                // className='cursor-pointer text-2xl animate-bounce'
              >
                <HomeIcon color="secondary" />
              </div>
            </Marker>
          </div>
        ))}
      </ReactMapGl>
    </div>
  )
}
