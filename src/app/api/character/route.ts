import { apiGetCharacterInfo } from "../../../../api/character/characterInfo";

/*
import { apiGetCharacterInfo } from "../../../../api/character/characterInfo";

export type GetCharacterInfoResponse = Awaited<
  ReturnType<typeof apiGetCharacterInfo>
>["data"];
*/
export async function GET() {
  const res = await apiGetCharacterInfo();
  const data = await res;
  console.log(data);
  return Response.json({ data });
}
