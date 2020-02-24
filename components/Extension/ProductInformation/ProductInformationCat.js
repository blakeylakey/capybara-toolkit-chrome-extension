import React, { useState } from "react";
import ProductInformationHead from "./ProductInformationHead";
import ProductInformationEl from "./ProductInformationEl";

const ProductInformationCat = ({ title, elements }) => {
  const [openElements, setOpenElements] = useState(true);
  const elementsHandler = event => {
    event.preventDefault();
    setOpenElements(!openElements);
    console.log(openElements);
  };
  return (
    <>
      <ProductInformationHead
        title={title}
        handler={elementsHandler}
        open={openElements}
      />
      {Object.keys(elements).map((key, idx) => {
        return (
          <ProductInformationEl
            open={openElements}
            title={key}
            value={elements[key]}
            key={idx}
          />
        );
      })}
    </>
  );
};

export default ProductInformationCat;
