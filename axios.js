import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts", //==> yahan '/posts' likh diya to App.js ma khuch bi likh do jesy meny 'url' likh diya
  // baseURL: "https://jsonplaceholder.typicode.com", //==> yahan '/posts' ni likh to App.js ma '/posts' zaror likhna h
});
export default API;
