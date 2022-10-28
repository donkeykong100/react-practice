import React from "react";
import "./HamburgerBtn.css";

export default function HambugerBtn({ toggle, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`hamburger ${toggle && "hamburger__active"}`}
    >
      <span />
    </div>
  );
}
