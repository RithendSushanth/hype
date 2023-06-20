import React from "react";
import Imgdes from "./Imgdes";
import "../CSS FILES/newin.css";

export default function Newin() {
  return (
    <>
    <div className="container-newin">
        <h1>New In</h1>
    </div>
      <div className="carousel-cards">
        <Imgdes />
        <Imgdes />
        <Imgdes />
      </div>
    </>
  );
}
