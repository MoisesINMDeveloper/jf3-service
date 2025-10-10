import { Request, Response } from "express";
import {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} from "../services/payment.service";

export const createPaymentController = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await createPayment(data);
  res.status(result.status).json(result);
};

export const getAllPaymentsController = async (req: Request, res: Response) => {
  const result = await getAllPayments();
  res.status(result.status).json(result);
};

export const getPaymentByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await getPaymentById(id);
  res.status(result.status).json(result);
};

export const updatePaymentController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updatePayment(id, data);
  res.status(result.status).json(result);
};

export const deletePaymentController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deletePayment(id);
  res.status(result.status).json(result);
};
