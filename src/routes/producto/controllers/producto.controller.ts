import { Request, Response } from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../services/producto.service';

export const createProductController = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await createProduct(data);
  res.status(result.status).json(result);
};

export const getAllProductsController = async (req: Request, res: Response) => {
  const result = await getAllProducts();
  res.status(result.status).json(result);
};

export const getProductByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await getProductById(id);
  res.status(result.status).json(result);
};

export const updateProductController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updateProduct(id, data);
  res.status(result.status).json(result);
};

export const deleteProductController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteProduct(id);
  res.status(result.status).json(result);
};
