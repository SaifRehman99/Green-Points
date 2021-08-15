import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Screens/Header";
import Sidebar from "./Screens/Sidebar";
import GreenPoint from "./Components/GreenPoint";
import AddGreenPoint from "./Components/AddGreenPoint";

function App() {
  const [coords, setCoords] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
 
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <div>
      <Router>
        <Header />

        <div className="d-flex">
          <div className="sidebar">
            <Sidebar />
          </div>

          <Route
            exact
            path="/"
            render={() => (
              <GreenPoint
                setCoords={setCoords}
                coords={coords}
              />
            )}
          />
          <Route
            exact
            path="/add-point"
            render={() => (
              <AddGreenPoint
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
                setCoords={setCoords}
                coords={coords}
              />
            )}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
