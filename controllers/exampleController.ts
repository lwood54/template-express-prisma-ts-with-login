import { Request, Response } from "express";

export const showExampleMessage = async (_: Request, res: Response) => {
  return res.status(200).json({ message: "Hello Example" });
};
