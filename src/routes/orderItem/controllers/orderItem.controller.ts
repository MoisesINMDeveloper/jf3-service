import { Request, Response } from "express";
import {
  getAllOrderItemsService,
  getOrderItemByIdService,
  createOrderItemService,
  updateOrderItemService,
  deleteOrderItemService,
} from "../services/orderItem.service";

export const getAllOrderItemsController = async (_req: Request, res: Response) => {
  try {
    const data = await getAllOrderItemsService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los items de pedidos", error });
  }
};

export const getOrderItemByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await getOrderItemByIdService(Number(id));
    if (!data) return res.status(404).json({ message: "Item de pedido no encontrado" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el item de pedido", error });
  }
};

export const createOrderItemController = async (req: Request, res: Response) => {
  try {
    const data = await createOrderItemService(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el item de pedido", error });
  }
};

export const updateOrderItemController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await updateOrderItemService(Number(id), req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el item de pedido", error });
  }
};

export const deleteOrderItemController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteOrderItemService(Number(id));
    res.status(200).json({ message: "Item de pedido eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el item de pedido", error });
  }
};
