import { Request, Response } from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderService,
  deleteOrder,
} from "../services/order.service";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    console.error("Error creando orden:", error);
    res.status(500).json({ error: "Error al crear la orden" });
  }
};

export const getOrdersController = async (_req: Request, res: Response) => {
  try {
    const orders = await getOrders();
    res.json(orders);
  } catch (error) {
    console.error("Error obteniendo órdenes:", error);
    res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};

export const getOrderByIdController = async (req: Request, res: Response) => {
  try {
    const order = await getOrderById(Number(req.params.id));
    if (!order) return res.status(404).json({ error: "Orden no encontrada" });
    res.json(order);
  } catch (error) {
    console.error("Error obteniendo orden:", error);
    res.status(500).json({ error: "Error al obtener la orden" });
  }
};

export const updateOrderController = async (req: Request, res: Response) => {
  try {
    const order = await updateOrderService(Number(req.params.id), req.body);
    res.json(order);
  } catch (error) {
    console.error("Error actualizando orden:", error);
    res.status(500).json({ error: "Error al actualizar la orden" });
  }
};

export const deleteOrderController = async (req: Request, res: Response) => {
  try {
    await deleteOrder(Number(req.params.id));
    res.json({ message: "Orden eliminada correctamente" });
  } catch (error) {
    console.error("Error eliminando orden:", error);
    res.status(500).json({ error: "Error al eliminar la orden" });
  }
};
