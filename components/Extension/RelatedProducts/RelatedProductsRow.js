import React from "react";

const RelatedProductsRow = ({ value, handler }) => (
  <tr className="capybara-extension--related-products--table-row">
    {Object.keys(value).map((key, idx) => {
      return (
        <td key={idx} onClick={handler}>
          {value[key]}
        </td>
      );
    })}
  </tr>
);

export default RelatedProductsRow;
