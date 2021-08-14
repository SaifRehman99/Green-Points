import React from "react";
import SelectBox from "./SelectBox";
import InputContainer from "./Input";
import { Button } from "@chakra-ui/react"
// import {BeatLoader} from '@chakra-ui/icons'



const AddGreenPoint = () => {
  return (
    <div className="d-flex">
      <div className="greenPointContainer">
        {/* HEADER PART HERE */}
        <div className="d-flex">
          <img
            className="mr-20"
            src={`${process.env.PUBLIC_URL}/icons/bx-arrow-back.svg`}
            alt="button_icon"
          />

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

                <label for="name" className="form__label ml-40">
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
                <label for="Address" className="form__label ml-40">
                  Enter Point Address....
                </label>
              </div>
            </div>
          </div>

          <div className="mt-30 greenpoint__card" style={{ height: "50vh" }}>
            <h5 className="mt-25">Containers</h5>

            <div>

              <div className="select__container mt-25">
                <SelectBox />
                <InputContainer />
              </div>

              <div className="select__container mt-25">
                <SelectBox />
                <InputContainer />
              </div>

              <div className="select__container mt-25">
                <SelectBox />
                <InputContainer />
              </div>

              <div className="select__container mt-25">
                <SelectBox />
                <InputContainer />
              </div>

              <div className="select__container mt-25">
                <SelectBox />
                <InputContainer />
              </div>

              <div className="select__container mt-25">
                <SelectBox />
                <InputContainer />
              </div>

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
  );
};

export default AddGreenPoint;
