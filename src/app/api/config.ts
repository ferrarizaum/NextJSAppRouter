import axios from "axios";

export const createClient = (baseURL: string | undefined) => {
  const client = axios.create({ baseURL });

  return client;
};
