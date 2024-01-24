import React, { Component } from "react";
import Slider from "react-slick";

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "grey" }}
        onClick={onClick}
      />
    );
  }