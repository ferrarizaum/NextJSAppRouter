import axios from "axios";

export const createClient = (baseURL: string | undefined) => {
  const client = axios.create({ baseURL });

  return client;
};

export const NextJSClient = createClient(process.env.NEXT_PUBLIC_API_BASE_URL);
