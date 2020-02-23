import React, { useEffect, useState } from "react";
import Scrape from "../../../helper/scraper";

import ProductInformationCat from "./ProductInformationCat";

const ProductInformation = () => {
  const [productInformation, setProductInformation] = useState({});
  const scrapeInformation = () => {
    const scrapedInformation = Scrape();
    setProductInformation(scrapedInformation);
  };
  useEffect(scrapeInformation, [productInformation.pageTitle]);
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
