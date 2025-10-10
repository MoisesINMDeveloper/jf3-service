import {
  createAliado,
  getAllAliados,
  getAliadoById,
  updateAliado,
  deleteAliado,
} from '../services/aliado.service';
import { Request, Response } from 'express';
import type { CreateAliadoDTO, UpdateAliadoDTO } from '../../../types/aliado.type';

export const createAliadoController = async (req: Request, res: Response) => {
  const data: CreateAliadoDTO = req.body; // debe venir { name, image }
  const result = await createAliado(data);
  res.status(result.status).json(result);
};

export const getAllAliadosController = async (req: Request, res: Response) => {
  const result = await getAllAliados();
  res.status(result.status).json(result);
};

export const getAliadoByIdController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await getAliadoById(id);
  res.status(result.status).json(result);
};

export const updateAliadoController = async (req: Request, res: Response) => {
  const id = Number(req.params.id); // ✅ Convierte a número
  const data = req.body;            // { name, image }
  const result = await updateAliado(id, data);
  res.status(result.status).json(result);
};

export const deleteAliadoController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await deleteAliado(id);
  res.status(result.status).json(result);
};

