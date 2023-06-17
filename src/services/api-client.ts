import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "cbef6a90b5684c6684515dd9b2c61613" },
});
