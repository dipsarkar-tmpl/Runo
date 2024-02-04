import React, { Component } from "react";
import "./SampleNext.css"
import Slider from "react-slick";

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
console.log(className,"class");
    return (
      <div
        className={`${className} test`}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }