import { Request, Response } from "express";
import {
  createPaydate,
  getAllPaydates,
  getPaydateById,
  updatePaydate,
  deletePaydate,
} from "../services/paydate.service";

export const createPaydateController = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await createPaydate(data);
  res.status(result.status).json(result);
};

export const getAllPaydatesController = async (req: Request, res: Response) => {
  const result = await getAllPaydates();
  res.status(result.status).json(result);
};

export const getPaydateByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await getPaydateById(id);
  res.status(result.status).json(result);
};

export const updatePaydateController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updatePaydate(id, data);
  res.status(result.status).json(result);
};

export const deletePaydateController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deletePaydate(id);
  res.status(result.status).json(result);
};
