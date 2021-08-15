import React from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "./mapStyles";

const Map = ({ coords, setCoords, allGreenPoints }) => {
  return (
    <div style={{ height: "90vh", width: "50vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={12}
        margin={[150, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={() => ''}
      >
        {coords && (
          <div
            className="markerContainer"
            lat={Number(coords?.lat)}
            lng={Number(coords?.lng)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/Shape.svg`}
              alt="map_pin"
            />
          </div>
        )}

        {allGreenPoints?.length && (

          allGreenPoints.map((point, index) => (

            <div
          className="markerContainer"
          lat={Number(point.address.coords?.lat)}
          lng={Number(point.address.coords?.lng)}
            key={index}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/Point.svg`}
            alt="map_pin"
          />
          </div>

          ))
          
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
