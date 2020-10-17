import React from "react";
import "./Logo.scss";

interface LogoProps {
  size: number;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return <div className="logo" style={{ width: size, height: size }} />;
};

export default Logo;
