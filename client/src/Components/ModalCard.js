import React from "react";
import Moment from "react-moment";

const ModalCard = ({
  userActivity: {
    user_name,
    createdAt,
    activity_data: { bottles, cans, sheets },
  },
}) => {
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
          <p><Moment format="MMM DD, hh:mm">{createdAt}</Moment></p>
        </div>

        <div>
          <div className="d-flex m-xy1">
            <p>
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/icons/Header/Avatar.svg`}
                alt="Avatar"
                className="avatar"
              />{" "}
            </p>{" "}
            &nbsp;&nbsp;&nbsp;{" "}
            <span className="font-w6">{user_name} Desposited waste.</span>
          </div>
          <p className="font-w1 mt-10">
            {bottles
              ? bottles > 1
                ? `${bottles} Plastic Bottles `
                : `${bottles} Plastic Bottle`
              : ""}{" "}
            &nbsp;
            {cans ? (cans > 1 ? `${cans} Cans` : `${cans} Can`) : ""} &nbsp;
            {sheets
              ? sheets > 1
                ? `${sheets} Sheets`
                : `${sheets} Sheet`
              : ""}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;