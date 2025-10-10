import orderItem from "../../../models/ordenItem.prisma";
import { CreateOrderItemDTO, UpdateOrderItemDTO } from "../../../types/orderItem.type";

// Obtener todos los items de pedidos
export const getAllOrderItemsService = async () => {
  return await orderItem.findMany({
    include: {
      product: true,
      order: true,
    },
  });
};

// Obtener un item específico
export const getOrderItemByIdService = async (id: number) => {
  return await orderItem.findUnique({
    where: { id },
    include: {
      product: true,
      order: true,
    },
  });
};

// Crear un nuevo item de pedido
export const createOrderItemService = async (data: CreateOrderItemDTO) => {
  return await orderItem.create({
    data,
  });
};

// Actualizar un item de pedido
export const updateOrderItemService = async (id: number, data: UpdateOrderItemDTO) => {
  return await orderItem.update({
    where: { id },
    data,
  });
};

// Eliminar un item de pedido
export const deleteOrderItemService = async (id: number) => {
  return await orderItem.delete({
    where: { id },
  });
};
