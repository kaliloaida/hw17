import React from "react";
import { motion } from "framer-motion";
const containerStyle = {
  position: "relative",
  width: "5rem",
  height: "5rem",
  boxSizing: "border-box",
  margin:' 0 auto',
};
const circleStyle = {
  display: "block",
  width: "5rem",
  height: "5rem",
  border: "1rem solid #E9E9E9",
  borderTop: "1rem solid #3498DB",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0
};
const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 2
};
export default function CircleLoader() {
  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}