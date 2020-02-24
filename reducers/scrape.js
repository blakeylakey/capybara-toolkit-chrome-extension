const scrape = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SCRAPE":
      return { ...state, ...action.scrapedInformation };
    default:
      return state;
  }
};

export default scrape;
