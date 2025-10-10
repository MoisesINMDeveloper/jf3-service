import { Request, Response } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../services/category.service";

export const createCategoryController = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await createCategory(data);
  res.status(result.status).json(result);
};

export const getAllCategoriesController = async (req: Request, res: Response) => {
  const result = await getAllCategories();
  res.status(result.status).json(result);
};

export const getCategoryByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await getCategoryById(id);
  res.status(result.status).json(result);
};

export const updateCategoryController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updateCategory(id, data);
  res.status(result.status).json(result);
};

export const deleteCategoryController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteCategory(id);
  res.status(result.status).json(result);
};
