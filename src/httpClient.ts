// import axios from "axios";

// const httpClient = axios.create({
//     baseURL: "http://localhost:3000",
// });

// export default httpClient;

import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default httpClient;