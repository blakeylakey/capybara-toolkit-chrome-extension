import React from "react";

const RelatedProductsHead = ({ headers }) => (
  <>
    <colgroup>
      {headers.map((element, idx) => {
        const headerStyle = {
          width: `${element.width}px`
        };
        return <col style={headerStyle} />;
      })}
    </colgroup>
    <tr className="capybara-extension--related-products--table-header">
      {headers.map((element, idx) => {
        return (
          <th key={idx}>
            <p>{element.value}</p>
          </th>
        );
      })}
    </tr>
  </>
);

export default RelatedProductsHead;
