import React from "react";
import classImg from "../../assets/class.png";
import swimmingImg from "../../assets/swimming.png";
import groundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-4 rounded-sm">
      <h2 className="font-bold mb-4">Q-Zone</h2>

      <div>
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={groundImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
