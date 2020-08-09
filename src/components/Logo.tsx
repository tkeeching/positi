import React from "react";
import "./Logo.scss";

interface LogoProps {
  size: number;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <div className="logo" style={{ width: size, height: size }}>
      <span
        style={{
          fontSize: size / 1.2,
          transform: "translate(5%, -5%)",
          color: "white",
        }}
      >
        P
      </span>
    </div>
  );
};

export default Logo;
