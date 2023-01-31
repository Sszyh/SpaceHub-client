import React, { useRef, useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/Map.css';
import getCenter from 'geolib/es/getCenter';

export default function Map(props) {

  const [selectedLocation, setSelectedLocation] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [zoom, setZoom] = useState('6');

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
      // zoom: 5
    });
  };

  const handleZoom = (lngLat) => {
    setZoom(9)
  }

  const handleClick = (result) => {
    console.log('fire');
    // setSelectedLocation(result);
    // setShowPopup(true);
    const w = window.open("d");
    w.location.href = result.id
  }
  return (
    <div className='maphub'>
      <ReactMapGl
        key={props.coord_lat}
        {...viewport}
        mapStyle='mapbox://styles/sszyh/cldhrjovw001101pf4aqwogcp'
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

              <p
                onClick={()=> handleClick(result)}
                className='cursor-pointer text-2xl animate-bounce'
                >😈</p>

            </Marker>

            {showPopup && selectedLocation && (
              <Popup
                longitude={selectedLocation.coord_long}
                latitude={selectedLocation.coord_lat}
                // anchor="bottom"
                onClose={() => setShowPopup(false)}
                >
                {selectedLocation.title}
                <h2
                // style={hStyle}
                >Hello</h2>
              </Popup>)
            }
          </div>
        ))}
      </ReactMapGl>
    </div>
  )
}
