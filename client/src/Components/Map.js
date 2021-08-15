import React from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "./mapStyles";
import classes from "./styles.css";

const Map = ({ coords, setCoords, setChildClicked }) => {


  return (
    <div style={{ height: "90vh", width: "60vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDC1TAR4ombz65moEQCbzNLowlI-PFHme0" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[150, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
          {coords && 
        <div
          className={classes.markerContainer}
          lat={Number(coords?.lat)}
          lng={Number(coords?.lng)}
          // key={i}
        >
          <img
            src={`${process.env.PUBLIC_URL}/icons/Shape.svg`}
            alt="map_pin"
          />
        </div>
}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
