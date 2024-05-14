import { RickdexAPIClient } from "../../src/app/api/client";

type CharacterResults = {
  results: CharacterInfo;
};

type CharacterInfo = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

export const apiGetCharacterInfo = () =>
  RickdexAPIClient.get<CharacterResults[]>(`character`);
