import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import Map from "./Map/index";
import Cards from "./Cards";

const GreenPoint = ({ coords, setCoords, setChildClicked }) => {
  
  const [allGreenPoints, setAllGreenPoints] = useState([]);
  const [filteredPoints, setFilteredPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pointName, setPointName] = useState("");

  const handleChange = (e) => setPointName(e.target.value);

  const handleSearch = () => {
    const search = new RegExp(pointName, "gi");

    setFilteredPoints(allGreenPoints.filter(({ name }) => search.test(name)));
  };

  useEffect(() => {
    !pointName && setFilteredPoints([]);
  }, [pointName]);

  useEffect(() => {
    const getPoints = async () => {
      setIsLoading(true);

      const {
        data: { greenPoints },
      } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/getPoints`);
      setAllGreenPoints(greenPoints);

      setIsLoading(false);
    };

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );

    getPoints();
  }, []);

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
                <>
                  <input
                    type="text"
                    className="form__field"
                    placeholder="Search the Green Points....."
                    name="search"
                    id="search"
                    value={pointName}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="search" className="form__label">
                    Search the Green Points.....
                  </label>
                </>
              </div>

              <div style={{ zIndex: "99999" }}>
                <button
                  className="green cursor-p"
                  onClick={() => handleSearch()}
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* GREEN POINTS CARDS */}
          {!isLoading ? (
            <div className="greenpoint__card">
              <h5 className="mt-35 h-2">{allGreenPoints.length ? 'All Green Points' : '' }</h5>

              <div>
                {allGreenPoints?.length ? 
                filteredPoints.length
                ? filteredPoints?.map((point, index) => (
                    <Cards
                      index={index + 1}
                      key={point._id}
                      name={point.name}
                      address={point.address}
                      timestamp={point.createdAt}
                    />
                  ))
                : allGreenPoints?.map((point, index) => (
                    <Cards
                      index={allGreenPoints.length - index}
                      key={point._id}
                      name={point.name}
                      address={point.address}
                      timestamp={point.createdAt}
                    />
                  )) : null}
              </div>
            </div>
          ) : (
            <Spinner
              className="spinner"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
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
