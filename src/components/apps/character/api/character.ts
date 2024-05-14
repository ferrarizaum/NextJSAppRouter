import { GetCharacterInfoResponse } from "@/app/api/character/route";
import { NextJSClient } from "@/app/api/client";

export const getCharacterInfo = () =>
  NextJSClient.get<GetCharacterInfoResponse>(`character`);
