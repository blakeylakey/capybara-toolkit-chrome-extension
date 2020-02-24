import React from "react";

const ProductInformationHead = ({ title, handler, open }) => (
  <div
    className="capybara-extension--product-information--header capybara-extension--product-information--content"
    onClick={handler}
  >
    <p>{title}</p>
    <img
      src={
        open
          ? "chrome-extension://lkplaakcmdpbelbmhkcpofabkdaaekhd/images/chevron-arrow-up.png"
          : "chrome-extension://lkplaakcmdpbelbmhkcpofabkdaaekhd/images/chevron-arrow-down.png"
      }
      height="15px"
    ></img>
  </div>
);

export default ProductInformationHead;
