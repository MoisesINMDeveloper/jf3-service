import { Request, Response } from "express";
import {
  createAdmin,
  getAdminByUsername,
  verifyAdminPassword,
  updateAdmin,
  deleteAdmin,
} from "../services/admin.service";

// Crear nuevo administrador
export const createAdminController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const result = await createAdmin(username, password);
  res.status(result.status).json(result.admin ?? { error: result.message });
};

export const verifyAdminPasswordController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const result = await verifyAdminPassword(username, password);
  if (result.status === 200) {
    res.status(200).json({ valid: true, admin: result.admin, token: result.token });
  } else {
    res.status(result.status).json({ valid: false, error: result.message });
  }
};
// Obtener administrador por username
export const getAdminByUsernameController = async (req: Request, res: Response) => {
  const { username } = req.params;
  const result = await getAdminByUsername(username);
  res.status(result.status).json(result.admin ?? { error: result.message });
};

// Login del administrador
export const loginAdminController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const result = await verifyAdminPassword(username, password);

  if (result.status === 200 && result.token) {
    res.status(200).json({ token: result.token, admin: result.admin });
  } else {
    res.status(result.status).json({ error: result.message });
  }
};

// Actualizar administrador
export const updateAdminController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await updateAdmin(Number(id), data);
  res.status(result.status).json(result.admin ?? { error: result.message });
};

// Eliminar administrador
export const deleteAdminController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await deleteAdmin(Number(id));
  res.status(result.status).json(result.message ? { message: result.message } : { error: result.message });
};
