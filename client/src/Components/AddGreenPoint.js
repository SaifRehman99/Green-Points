import React, { useState, useRef, useEffect } from "react";
import { Autocomplete } from "@react-google-maps/api";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Map from "./Map/index";
import InputSelect from "./InputSelect";
import AlertMessage from "./Alert";
import { Button } from "@chakra-ui/react";

const AddGreenPoint = ({ onLoad, onPlaceChanged, coords, setCoords }) => {
  let history = useHistory();

  // While autocomplete search, onChange doesnt trigger and return incomplete text
  //  that's why using ref here to target that node and fetch value
  let addressEl = useRef(null);

  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [formValues, setFormValues] = useState([{ name: "", weight: 0 }]);

  const handleSubmit = async () => {
    const containers = formValues.map((obj) => obj.name);

    // Below is the logic checking for duplicates.
    const set = new Set(containers);
    const hasDuplicates = set.size < formValues.length;

    if (formValues[0].name && formValues[0].weight && !hasDuplicates) {
      setSuccess(true);

      const config = { headers: { "Content-Type": "application/json" } };

      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/addPoint`,
        {
          name,
          address: { text: addressEl.current.value, coords },
          containers: formValues,
        },
        config
      );

      setSuccess(false);
      history.push("/");
    } else {
      // WE CAN SEND ALERT HERE
      setError(true);
    }
  };


  
  useEffect(() => {

    let timer = setTimeout(() => {
      setError(false);
    }, 3500);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and error will not change to true
    return () => {
      clearTimeout(timer);
    };
  }, [error]);



  return (
    <div className="container">
      <div className="d-flex">
        <div className="greenPointContainer">
          {error && <AlertMessage message="Missing or Invalid Input!" />}
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
                        ref={addressEl}
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
        <Map setCoords={setCoords} coords={coords} />
      </div>
    </div>
  );
};

export default AddGreenPoint;
