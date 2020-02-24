import React from "react";

import ProductInformation from "./ProductInformation/ProductInformation";
import ProductPredictions from "./ProductPredictions/ProductPredictions";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const ExtensionContent = () => (
  <div className="capybara-extension--content--container">
    <div className="capybara-extension--content--col capybara-extension--content--col-3">
      <ProductInformation />
      <ProductPredictions />
    </div>
    <div className="capybara-extension--content--col capybara-extension--content--col-9">
      <RelatedProducts />
    </div>
  </div>
);

export default ExtensionContent;
