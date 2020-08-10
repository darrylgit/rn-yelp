import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 6L1ZHfhgIq-NXbRNlIM7g-Ln7Fnfet9yYhtVpdRVp6WkHFkcoTPMO6GoS2p0l76-d7VgUBEBlteBrwv6EO7zcp5gHxsJ4OQ3gFGS8A8m9OWxhc7kGczCLbZwmkowX3Yx"
  }
});
