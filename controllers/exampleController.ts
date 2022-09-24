import { Request, Response } from "express";

export const exampleRoute = async (_: Request, res: Response) => {
  return res.status(200).json({ message: "Hello Example" });
};
