export const addScrape = scrapedInformation => {
  return {
    type: "ADD_SCRAPE",
    scrapedInformation: scrapedInformation
  };
};
