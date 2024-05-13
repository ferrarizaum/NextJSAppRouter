import axios from "axios";

export const createClient = (baseURL: string | undefined) => {
  const client = axios.create({ baseURL });

  return client;
};

export const NextJSClient = createClient("http://localhost:3000/api");
