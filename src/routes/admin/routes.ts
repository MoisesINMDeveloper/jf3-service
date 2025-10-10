import express from 'express';
import {
  createAdminController,
  getAdminByUsernameController,
  updateAdminController,
  deleteAdminController,
  verifyAdminPasswordController,
} from './controllers/admin.controller';
import { authenticatedReq } from '../../middleware/auth.middleware'

const router = express.Router();

// Rutas públicas
router.post('/login', verifyAdminPasswordController);

// Rutas protegidas por middleware de autenticación
router.post('/create', createAdminController);
router.get('/exists/:username', authenticatedReq, getAdminByUsernameController);
router.post('/verify', authenticatedReq, verifyAdminPasswordController);
router.put('/update/:id', authenticatedReq, updateAdminController);
router.delete('/delete/:id', authenticatedReq, deleteAdminController);

export default router;
