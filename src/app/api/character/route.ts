export async function GET() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return Response.json({ data });
}
/*
import routerCreation, {
  baseHandler,
} from "@/components/lib/api/backend/middleware";
import { apiGetCharacterInfo } from "../../../../api/character/characterInfo";
import { sendResponse } from "@/components/lib/api/backend/parser";

const router = routerCreation();

router.get((req, res) =>
  apiGetCharacterInfo().then((e) => sendResponse(e, res))
);

export type GetCharacterInfoResponse = Awaited<
  ReturnType<typeof apiGetCharacterInfo>
>["data"];

export default baseHandler(router);
*/
