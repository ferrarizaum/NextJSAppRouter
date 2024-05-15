import { AxiosResponse } from "axios";
import { NextApiResponse } from "next";

export function sendResponse<T extends AxiosResponse>(
  e: T,
  res: NextApiResponse
) {
  console.log(e);
  return res.status(200).json(e.data);
}
