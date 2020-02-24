import React, { useState, useEffect } from "react";

import RelatedProductsHead from "./RelatedProductsHead";
import RelatedProductsContent from "./RelatedProductsContent";

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const getRelatedProductInformation = () => {
    chrome.runtime.sendMessage(
      { relatedProducts: "asin", itemId: 69 },
      results => setRelatedProducts(results)
    );
  };
  useEffect(getRelatedProductInformation, [relatedProducts.length]);

  const tdHandler = event => {
    event.preventDefault();
    event.target.classList.add("td-focused");
  };

  const headers = [
    { value: "ID", width: "40" },
    { value: "ASIN", width: "130" },
    { value: "Title", width: "300" },
    { value: "Brand", width: "180" },
    { value: "Review Count", width: "110" },
    { value: "Review Score", width: "110" },
    { value: "Price", width: "80" },
    { value: "Category", width: "150" },
    { value: "Best Seller's Rank", width: "150" },
    { value: "Estimated Sales", width: "160" },
    { value: "Estimated Revenue", width: "160" },
    { value: "Date Listed", width: "170" }
  ];

  return (
    <table id="capybara-extension--related-products--table">
      <RelatedProductsHead headers={headers} />
      <RelatedProductsContent content={relatedProducts} handler={tdHandler} />
    </table>
  );
};

export default RelatedProducts;
