import React, { Component } from "react";
import Slider from "react-slick";
import "./SampleNext.css";

 export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  }}
        onClick={onClick}
      />
    );
  }