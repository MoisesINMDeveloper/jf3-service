import { Request, Response } from "express";
import {
  createDeliveryOption,
  getAllDeliveryOptions,
  getDeliveryOptionById,
  updateDeliveryOption,
  deleteDeliveryOption,
} from "../services/deliveryOptions.service";

export const createDeliveryOptionController = async (req: Request, res: Response) => {
  const result = await createDeliveryOption(req.body);
  res.status(result.status).json(result);
};

export const getAllDeliveryOptionsController = async (req: Request, res: Response) => {
  const result = await getAllDeliveryOptions();
  res.status(result.status).json(result);
};

export const getDeliveryOptionByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await getDeliveryOptionById(id);
  res.status(result.status).json(result);
};

export const updateDeliveryOptionController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await updateDeliveryOption(id, req.body);
  res.status(result.status).json(result);
};

export const deleteDeliveryOptionController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteDeliveryOption(id);
  res.status(result.status).json(result);
};
