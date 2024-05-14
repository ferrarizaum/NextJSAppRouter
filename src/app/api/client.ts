import { createClient } from "./config";

export const NextJSClient = createClient(process.env.NEXT_PUBLIC_API_BASE_URL);
export const RickdexAPIClient = createClient(process.env.RICKDEX_API);
