import React from "react";
import RelatedProductsRow from "./RelatedProductsRow";

const RelatedProductsContent = ({ content, handler }) => (
  <>
    {content.map((element, idx) => {
      let formattedResults = {
        id: element.id || "",
        asin: element.asin || "",
        title: element.title || "",
        brand: element.brand || "",
        review_count: (element.review_count || 0).toLocaleString(),
        review_score: (element.review_score || 0).toLocaleString(),
        price: `$${(element.price || 0).toLocaleString()}`,
        category: element.category || "",
        rank: `#${(element.rank || 0).toLocaleString()}`,
        est_sales: (element.est_sales || 0).toFixed(1),
        est_rev: `$${(element.est_rev || 0).toFixed(2)}`,
        date_listed: element.date_listed || ""
      };
      return (
        <RelatedProductsRow
          key={idx}
          value={formattedResults}
          handler={handler}
        />
      );
    })}
  </>
);

export default RelatedProductsContent;
