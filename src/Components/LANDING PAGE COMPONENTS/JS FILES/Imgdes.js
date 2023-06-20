import React from "react";
import "../CSS FILES/imgdes.css";
import femaleimg from '../IMAGES/female.jpeg'
import hearticon from '../IMAGES/heart.png'

export default function Imgdes() {
  return (
    <>
    <div className="outer-container">
      <div className="container-newin">
        <div className="image">
          <img
            className="w-full"
            id="img"
            src={femaleimg}
            alt="female"
          />
        </div>
        <div className="des">Coco Stripes Heavyweight Oversized T-Shirt</div>
        <div className="pricing">
          <div>
            <p>
              <s>₹899.00</s>
            </p>
          </div>

          <div>
            <p className="price">₹599.00</p>
          </div>

        </div>


        <div className="wishlist-buttons">
          <div className="opt">
            <a href="/">SELECT OPTIONS</a>
          </div>
          <div className="wishlist">
            <a href="/">
              <img
                className="w-full"
                id="wl"
                src={hearticon}
                alt="heart"
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}
