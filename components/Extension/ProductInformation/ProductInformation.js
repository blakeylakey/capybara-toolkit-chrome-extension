import React, { useEffect, useState } from "react";
import Scrape from "../../../helper/scraper";

import ProductInformationCat from "./ProductInformationCat";
import { addScrape } from "../../../actions";
import { useDispatch } from "react-redux";

const ProductInformation = () => {
  const [productInformation, setProductInformation] = useState({});
  const dispatch = useDispatch();
  const scrapeInformation = () => {
    const scrapedInformation = Scrape();
    dispatch(addScrape(scrapedInformation));
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
