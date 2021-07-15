const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
  // space: "w34p5oyi64rv",
  // accessToken: "Ee6dZbIvmNG6-gW24u3g_1Dd5YLgGAPAd4813f3XXkE"
});
