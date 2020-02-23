import React from "react";

import ProductInformation from "./ProductInformation/ProductInformation";

const ExtensionContent = () => (
  <div className="capybara-extension--content--container">
    <div className="capybara-extension--content--col capybara-extension--content--col-3">
      <ProductInformation />
    </div>
    <div className="capybara-extension--content--col capybara-extension--content--col-9"></div>
  </div>
);

export default ExtensionContent;
