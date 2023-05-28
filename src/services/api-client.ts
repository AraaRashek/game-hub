import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "cbef6a90b5684c6684515dd9b2c61613" },
});
