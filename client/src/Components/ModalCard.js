import React from "react";

const ModalCard = ({data}) => {
  return (
    <div>
      <div className="mt-2 ">
        <p className="modal__right--para">
          Today . <span>April 29th</span>
        </p>
      </div>

      <div className="modal__right--div mt-25">
        <div className="d-flex__row m-xy1">
          <p className="modal__right--deposite">Deposit</p>
          <p>Aug 24, 09:10 GST</p>
        </div>

        <div>
          <div className="d-flex m-xy1">
            <p>
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/icons/Avatar.svg`}
                alt="Avatar"
                className="avatar"
              />{" "}
            </p>{" "}
            &nbsp;&nbsp;&nbsp;{" "}
            <span className="font-w6">Jake Desposited waste.</span>
          </div>
          <p className="font-w1 mt-10">5 Plastic Bottles, 3 Cans, 1 Sheet</p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
