import React, { useState } from "react";

export const ColorButton = ({ bg, selected, setSelected, id }) => {
  const setHandle = () => {
    setSelected(id);
  };

  return (
    <>
      <button
        style={{ background: bg }}
        className={`w-6 h-6 border rounded-full ${
          selected == id ? "border-white-1" : "border-none"
        }`}
        onClick={setHandle}
      ></button>
    </>
  );
};
2;
