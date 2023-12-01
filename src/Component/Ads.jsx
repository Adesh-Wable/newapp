import React, { useState } from "react";
import "../Component/Style/NewApp.css";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

const Ads = () => {
  const navigate = useNavigate();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2);
  };

  const handleNextButtonClick = () => {
    if (isChecked1 && isChecked2) {
      navigate("/mediaadform");
    } else if (isChecked2) {
      navigate("/mediaadform");
    } else {
      navigate("/textadform");
    }
  };

  return (
    <div className="main-ads">
      <label>Create Ads</label>
      <div className="Ads">
        <div className="text-ad">
          <Checkbox checked={isChecked1} onChange={handleCheckbox1Change} />
          <img
            className="text-img"
            src="https://e7.pngegg.com/pngimages/506/502/png-clipart-screenshot-line-brand-mobile-phones-iphone-bulk-messaging-text-rectangle.png"
            alt=""
          />
          <div className="text">
            <label>Create</label>
            <h3>Text Ad</h3>
          </div>
        </div>

        <div className="media-ad">
          <Checkbox checked={isChecked2} onChange={handleCheckbox2Change} />
          <img
            className="media-img"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8DmAC_BBIxl2BZz4x4q4jrgqUMHi9KodZRdcemU3PIdWnJqGo"
            alt=""
          />
          <div className="text">
            <label>Create</label>
            <h3>Media Ad</h3>
          </div>
        </div>
      </div>
      <div className="nxt-btn">
        <button onClick={handleNextButtonClick}>Next</button>
      </div>
    </div>
  );
};

export default Ads;
