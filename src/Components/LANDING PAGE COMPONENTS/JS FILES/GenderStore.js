import React from "react";
import "../CSS FILES/Gender_store.css";
import menmodel from '../IMAGES/men-model.jpg'
import womenmodel from '../IMAGES/women-model.jpg'

export default function GenderStore() {
  return (
    <>
      <div className="gender_shop">
        <div className="mens">
          <div className="img">
            <img src={menmodel} alt="mensimage" />
          </div>
          <div>
            <button className="btn-gender">SHOP MENS</button>
          </div>
        </div>
        <div className="womens">
          <div className="img">
            <img src={womenmodel} alt="womensimage"/>
          </div>
          <div>
            <button className="btn-gender">SHOP WOMENS</button>
          </div>
        </div>
      </div>
    </>
  );
}
