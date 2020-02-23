import React from "react";
import NavBar from "./NavBar";
import ExtensionContent from "./ExtensionContent";

const ExtensionContainer = ({ open, handler }) => (
  <div
    id="capybara-extension--extension--container"
    className={open ? "" : "hidden"}
  >
    <NavBar handler={handler} />
    <ExtensionContent />
  </div>
);

export default ExtensionContainer;
