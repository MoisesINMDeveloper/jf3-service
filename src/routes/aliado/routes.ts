import express from 'express';
import {
  createAliadoController,
  getAllAliadosController,
  getAliadoByIdController,
  updateAliadoController,
  deleteAliadoController,
} from './controllers/aliado.controller';
import { authenticatedReq } from '../../middleware/auth.middleware';

const router = express.Router();

// Rutas públicas
router.get('/', getAllAliadosController);
router.get('/:id', getAliadoByIdController);

// Rutas protegidas por auth
router.post('/', authenticatedReq, createAliadoController);
router.put('/:id', authenticatedReq, updateAliadoController);
router.delete('/:id', authenticatedReq, deleteAliadoController);

export default router;
