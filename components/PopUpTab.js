import React from "react";

const PopUpTab = ({ handler }) => (
  <div id="capybara-extension--pop-up-tab--container" onClick={handler}>
    <img
      src="chrome-extension://lkplaakcmdpbelbmhkcpofabkdaaekhd/images/chevron-arrow-up.png"
      alt="Capybara Extension - Open"
      height="20px"
      id="capybara-extension--pop-up-tab--image"
    ></img>
  </div>
);

export default PopUpTab;
