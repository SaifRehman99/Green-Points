import React, { useState } from "react";
import { Link } from "react-router-dom";

import SelectBox from "./SelectBox";
import InputContainer from "./Input";
import { Button } from "@chakra-ui/react";
// import {BeatLoader} from '@chakra-ui/icons'

const AddGreenPoint = () => {
  const [addFormCount, setAddFormCount] = useState(3);

  const addFormFields = () => setAddFormCount((prev) => ++prev);

  return (
    <div className="container">
      <div className="d-flex">
        <div className="greenPointContainer">
          {/* HEADER PART HERE */}
          <div className="d-flex" style={{alignItems:'center'}}>
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

                  <input
                    type="input"
                    className="form__field"
                    placeholder="New Point"
                    name="Address"
                    id="Address"
                  />
                  <label htmlFor="Address" className="form__label ml-40">
                    Enter Point Address....
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-30 greenpoint__card" style={{ height: "50vh" }}>
              <h5 className="mt-25">Containers</h5>

              <div>
                {Array.from({ length: addFormCount }, (_, idx) => `${idx}`).map(
                  (_) => (
                    <div className="select__container mt-25">
                      <SelectBox />
                      <InputContainer />
                    </div>
                  )
                )}

                <p
                  className="greenpoint__add font-w6 cursor-p"
                  onClick={addFormFields}
                >
                  + &nbsp; Add Another Container
                </p>
              </div>

              <div className="mt-25">
                <Button colorScheme="teal" variant="solid">
                  Create Green Point
                </Button>

                {/* <Button
  isLoading
  colorScheme="blue"
  spinner={<BeatLoader size={8} color="white" />}
>
  Click me
</Button> */}
              </div>
            </div>
          </div>

          {/* GREEN POINTS CARDS */}
          <div></div>
        </div>

        <div className="mapContainer">Map here</div>
      </div>
    </div>
  );
};

export default AddGreenPoint;
