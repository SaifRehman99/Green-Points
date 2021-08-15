import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Map from "./Map/index";
import InputSelect from "./InputSelect";
import { Button } from "@chakra-ui/react";
// import {BeatLoader} from '@chakra-ui/icons'

const AddGreenPoint = ({
  onLoad,
  onPlaceChanged,
  coords,
  setCoords,
  setChildClicked
}) => {

  let history = useHistory();

  
  const [name, setName] = useState("");
  const [address, setAddress] = useState({});
  const [success, setSuccess] = useState(false);
  const [formValues, setFormValues] = useState([{ name: "", weight: 0 }]);

  const handleSubmit = async () => {
    setSuccess(true);

    const config = { headers: { "Content-Type": "application/json" } };

    await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/addPoint`,
      { name, address: { text:address, coords }, containers: formValues },
      config
    );

    setSuccess(false);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="d-flex">
        <div className="greenPointContainer">
          {/* HEADER PART HERE */}
          <div className="d-flex" style={{ alignItems: "center" }}>
            <Link to="/">
              <img
                className="mr-20"
                src={`${process.env.PUBLIC_URL}/icons/bx-arrow-back.svg`}
                alt="button_icon"
              />
            </Link>

            <span className="h-4">New Green Point</span>
          </div>

          {/* SEARCHING */}
          <div>
            <div>
              <h5 className="mt-25">Name</h5>
              <div className="greenPoint">
                <div className="form__group field">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/bx-trash.svg`}
                    alt="button_icon"
                  />
                  <input
                    type="input"
                    className="form__field"
                    placeholder="New Point"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor="name" className="form__label ml-40">
                    Enter Point Name....
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h5 className="mt-25">Address</h5>
              <div className="greenPoint">
                <div className="form__group field">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/bx-map-alt.svg`}
                    alt="button_icon"
                  />

                  <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <>
                      <input
                        type="input"
                        className="form__field"
                        placeholder="New Point"
                        name="Address"
                        id="Address"
                        onChange={(e) =>
                          setAddress( e.target.value)
                        }
                      />
                      <label htmlFor="Address" className="form__label ml-40">
                        Enter Point Address....
                      </label>
                    </>
                  </Autocomplete>
                </div>
              </div>
            </div>

            <div className="mt-30 greenpoint__card" style={{ height: "50vh" }}>
              <h5 className="mt-25">Containers</h5>

              <div>
                <div>
                  <InputSelect
                    setFormValues={setFormValues}
                    formValues={formValues}
                  />
                </div>
              </div>

              <div className="mt-25">
                <Button
                  isLoading={success}
                  loadingText="Creating Point......"
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => handleSubmit()}
                >
                  Create Green Point
                </Button>
              </div>
            </div>
          </div>

          {/* GREEN POINTS CARDS */}
          <div></div>
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

export default AddGreenPoint;
