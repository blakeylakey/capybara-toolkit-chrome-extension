import React, { useEffect, useState } from "react";
import Scrape from "../../../helper/scraper";

import ProductInformationCat from "../ProductInformation/ProductInformationCat";
import { useSelector } from "react-redux";

const ProductInformation = () => {
  const productInformation = useSelector(state => state.scrape);
  console.log(productInformation);

  return (
    <>
      <ProductInformationCat
        title={"Product Information"}
        elements={productInformation}
      />
    </>
  );
};

export default ProductInformation;
