import React from "react";
import { PersonalInfoData } from "./PersonalInfoData.js";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <div className="personal-info-name">
        {PersonalInfoData.map((item, index) => {
          return (
            <h3 key={index} className="item-name">
              {item.name}
            </h3>
          );
        })}
      </div>
      <div className="personal-info-info">
        {PersonalInfoData.map((item, index) => {
          return (
            <h3 key={index} className="item-info">
              {item.info}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalInfo;
