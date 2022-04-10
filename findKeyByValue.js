const findKeyByValue = (items, show) => {
    for (let key in items) {
      if (items[key] === show) {
        return key;
      }
    }
  };

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };