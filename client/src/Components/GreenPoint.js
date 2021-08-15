import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Map from "./Map";
import Cards from './Cards'

const GreenPoint = () => {

  const [coords, setCoords] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(coords)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);


  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };


  return (
    <div className="container">
    <div className="d-flex">
      <div className="greenPointContainer">


        {/* HEADER PART HERE */}
        <div className="greenPoint">
          <h1 className="greenPointHeading">Green Points</h1>

          <Link to="/add-point">
          <button className="greenPointButton">
            <img
              src={`${process.env.PUBLIC_URL}/icons/bx-plus.svg`}
              alt="button_icon"
            />
          </button>
          </Link>
        </div>

        {/* SEARCHING */}
        <div>
          <h5 className="mt-25">Search database</h5>
          <div className="greenPoint">
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Search the Green Points....."
                name="search"
                id="search"
              />
              <label htmlFor="search" className="form__label">
                Search the Green Points.....
              </label>
            </div>

            <div>
              <h5 className="green">Search</h5>
            </div>
          </div>
        </div>


        {/* GREEN POINTS CARDS */}
        <div className="greenpoint__card">
          <h5 className="mt-35 h-2">All Green Points</h5>


          <div className="green">

          <Cards name={"Evan's Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>
          <Cards name={"Another Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>
          <Cards name={"Evan's Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>

          <Cards name={"Evan's Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>
          <Cards name={"Another Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>
          <Cards name={"Evan's Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>

          <Cards name={"Evan's Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>
          <Cards name={"Another Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>
          <Cards name={"Evan's Green Point"} address={"2972 Westheimer Rd. Santa Ana, Illinois 85486"} timestamp={"Saturday, Aug 24th at 09:00"}/>


        </div>
        </div>


      </div>


{/* MAP HERE */}
      <Map
         setChildClicked={setChildClicked}
         setCoords={setCoords}
         coords={coords}
         />
    </div>
    </div>
  );
};

export default GreenPoint;
