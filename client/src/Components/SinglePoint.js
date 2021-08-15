import React, { useState } from "react";
import ModalCard from "./ModalCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import Moment from 'react-moment';



const SinglePoint = ({ currentData, setCurrentData }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
    setCurrentData([]);
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} size={"6xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="d-flex">
            {/* LEFT CONTENT OF MODAL */}
            <div className="modal__left">
              <ModalHeader className="chakra-modal--header">
                {currentData[0].name}
              </ModalHeader>

              <p className="ml-86 green">{currentData[0].address}</p>
              <ModalCloseButton />
              <ModalBody>
                <div>
                  <div className="d-flex mt-10 modal--info">
                    <div className="d-flex">
                      <img
                        src={`${process.env.PUBLIC_URL}/icons/bx-time.svg`}
                        alt="Modal_Icon"
                      />
                      <p className="m-22">
                      Next Clean Up: &nbsp;&nbsp;
                        <Moment format="MMMM DD -  hh:mm">
                          {currentData[0].timestamp}
                        </Moment>
                      </p>
                    </div>

                    <p className="green">View Route</p>
                  </div>

                  {/* MAP HERE */}
                  <div>
                    <img
                      className="mt-25"
                      src={`${process.env.PUBLIC_URL}/icons/Map__modal.svg`}
                      alt="MODAL_MAP"
                    />
                  </div>

                  {/* ICONS HERE */}

                  <div className="d-flex mt-25">
                    <div className="modal__icon m-xy">
                      <img
                        src={`${process.env.PUBLIC_URL}/icons/paper.svg`}
                        alt="Modal_Icon"
                      />
                    </div>

                    <div className="modal__icon-1 m-xy">
                      <img
                        src={`${process.env.PUBLIC_URL}/icons/organic.svg`}
                        alt="Modal_Icon"
                      />
                    </div>

                    <div className="modal__icon m-xy">
                      <img
                        src={`${process.env.PUBLIC_URL}/icons/glass.svg`}
                        alt="Modal_Icon"
                      />
                    </div>

                    <div className="modal__icon m-xy">
                      <img
                        src={`${process.env.PUBLIC_URL}/icons/plastic.svg`}
                        alt="Modal_Icon"
                      />
                    </div>

                    <div className="modal__icon-2 m-xy">
                      <img
                        src={`${process.env.PUBLIC_URL}/icons/e-waste.svg`}
                        alt="Modal_Icon"
                      />
                    </div>

                    <div className="modal__icon m-xy ml-40">
                      <img
                        src={`${process.env.PUBLIC_URL}/icons/metal.svg`}
                        alt="Modal_Icon"
                      />
                    </div>
                  </div>

                  {/* ICON_TEXT */}
                  <div className="d-flex mt-25">
                    <div className="d-flex__column">
                      <div className="m-xy font-w6">Paper</div>

                      <p className="red font-w6">100%</p>
                    </div>

                    <div className="d-flex__column">
                      <div className="m-xy font-w6">Organic</div>

                      <p className="yellow font-w6">56%</p>
                    </div>

                    <div className="d-flex__column">
                      <div className="m-xy font-w6">Glass</div>
                      <p className="red font-w6">100%</p>
                    </div>

                    <div className="d-flex__column">
                      <div className="m-xy font-w6">Plastic</div>

                      <p className="red font-w6">100%</p>
                    </div>

                    <div className="d-flex__column">
                      <div className="m-xy font-w6">E-Waste</div>

                      <p className="green font-w6">25%</p>
                    </div>

                    <div>
                      <div className="m-xy font-w6">Metal</div>
                      <p className="ml-25 red font-w6">100%</p>
                    </div>
                  </div>

                  {/* BUTTON */}

                  <div className="mt-25">
                    <Button colorScheme="teal" variant="solid">
                      Deposite Waste
                    </Button>
                  </div>

                  {/* STATS HERE */}

                  <div
                    className="mt-25 d-flex"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div className="d-flex cursor-p">
                      <img
                        className="mr-10"
                        src={`${process.env.PUBLIC_URL}/icons/bx-stats.svg`}
                        alt="Modal_Icon"
                      />
                      <p className="green f-12">
                        Wrong Stats? Update them now.
                      </p>
                    </div>

                    <div className="d-flex m-25 cursor-p">
                      <img
                        className="mr-10"
                        src={`${process.env.PUBLIC_URL}/icons/bx-error.svg`}
                        alt="Modal_Icon"
                      />
                      <p className="red f-12 ">Problem? Report here.</p>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </div>

            {/* RIGHT CONTENT OF MODAL */}

            <div className="modal__right">
              <h3 className="font-w6">Activity:</h3>

             <ModalCard />
             <ModalCard />
             <ModalCard />
             

            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SinglePoint;
