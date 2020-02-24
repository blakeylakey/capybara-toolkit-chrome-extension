function scrape() {
  var pageTitle,
    reviewScore,
    reviewCount,
    bsr,
    cats,
    productDetails,
    sellerRank,
    category,
    asin;

  // Product Title
  try {
    pageTitle = document.querySelector("#productTitle").innerText;
  } catch (error) {
    pageTitle = "";
  }

  // Gets the star rating
  try {
    reviewScore = parseFloat(
      document
        .querySelector("#averageCustomerReviews .a-icon-alt")
        .innerText.split(" ")[0]
    );
  } catch (error) {
    reviewScore = 0;
  }

  // Gets the number of reviews
  try {
    reviewCount = parseFloat(
      document.querySelector("#acrCustomerReviewText").innerText.split(" ")[0]
    );
  } catch (error) {
    reviewCount = 0;
  }

  // Gets the product details, sometimes fails because of differences with product detail infromation
  // pulls bsr and category specifically
  try {
    productDetails = document.querySelectorAll(
      "#productDetails_detailBullets_sections1 tr"
    );
    cats = [];
    productDetails.forEach(el => {
      if (el.querySelector("th").innerText === "Best Sellers Rank") {
        bsr = el
          .querySelector("td")
          .innerText.split(/\r?\n/)
          .forEach(cat => {
            cats.push(cat.replace(/ *\([^)]*\) */g, "").split(" in "));
          });
      } else if (el.querySelector("th").innerText === "ASIN") {
        asin = el.querySelector("td").innerText.trim();
      }
    });
    sellerRank = cats[0][0];
    category = cats[0][1];
  } catch (error) {
    bsr = [];
    sellerRank = "";
    category = "";
    asin = "";
  }

  return {
    "Product Title": pageTitle,
    "Product Review Score": reviewScore,
    "Product Review Count": reviewCount,
    "Best Seller's Rank": sellerRank,
    Category: category,
    ASIN: asin
  };
}

export default scrape;
