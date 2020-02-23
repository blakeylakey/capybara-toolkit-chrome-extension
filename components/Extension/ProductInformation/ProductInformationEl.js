import React from "react";

const ProductInformationEl = ({ title, value, open }) => {
  let formattedValue = "";
  if (value === "") {
    formattedValue = "Unknown";
  } else {
    formattedValue = value;
  }
  const openClass = open ? "" : "product-information-no-display";
  return (
    <div
      className={
        "capybara-extension--product-information--element capybara-extension--product-information--content " +
        openClass
      }
    >
      <p className="bold">{title}</p>
      <p>{formattedValue}</p>
    </div>
  );
};

export default ProductInformationEl;
