import React, { useState } from "react";

import PopUpTab from "./PopUpTab";
import ExtensionContainer from "./Extension/ExtensionContainer";

const PopUp = () => {
  const [extensionOpen, setExtensionOpen] = useState(false);
  const tabHandler = e => {
    e.preventDefault();
    setExtensionOpen(!extensionOpen);
  };

  return (
    <>
      <PopUpTab handler={tabHandler} />
      <ExtensionContainer open={extensionOpen} handler={tabHandler} />
    </>
  );
};

export default PopUp;
