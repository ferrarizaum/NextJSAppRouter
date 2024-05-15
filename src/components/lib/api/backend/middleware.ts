import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { NodeRouter } from "../../../../../node_modules/next-connect/dist/types/node";

export const baseHandler = (
  router: NodeRouter<NextApiRequest, NextApiResponse>
) =>
  router.handler({
    onNoMatch: (req, res) => res.status(404).json({ error: "API not found" }),
  });

export const routerCreation = () =>
  createRouter<NextApiRequest, NextApiResponse>();

export default routerCreation;
