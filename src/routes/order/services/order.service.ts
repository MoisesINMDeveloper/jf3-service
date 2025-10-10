import type { OrderStatus } from "@prisma/client";
import ordersPrisma from "../../../models/orden.prisma";
import orderItemsPrisma from "../../../models/ordenItem.prisma";
import { CreateOrderDTO, UpdateOrderDTO } from "../../../types/order.type";

// Crear una orden
export const createOrder = async (data: CreateOrderDTO) => {
  // Validar que existan items
  const items = data.items || [];

  // Calcular totalAmount de forma segura
  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const order = await ordersPrisma.create({
    data: {
      clientName: data.clientName,
      clientPhone: data.clientPhone,
      aliadoId: data.aliadoId,
      totalAmount,
      status: "PENDING",
      orderItems: {
        create: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: { orderItems: true },
  });

  return order;
};

// Obtener todas las órdenes
export const getOrders = async () => {
  return await ordersPrisma.findMany({
    include: {
      aliado: true,
      orderItems: { include: { product: true } },
      payment: true,
    },
  });
};

// Obtener orden por ID
export const getOrderById = async (id: number) => {
  return await ordersPrisma.findUnique({
    where: { id },
    include: {
      aliado: true,
      orderItems: { include: { product: true } },
      payment: true,
    },
  });
};

// Actualizar orden
export const updateOrderService = async (id: number, data: UpdateOrderDTO) => {
  const { status, ...rest } = data;

  return await ordersPrisma.update({
    where: { id },
    data: {
      ...rest,
      ...(status && { status: status as OrderStatus }), // convierte string a enum
    },
  });
};

// Eliminar orden
export const deleteOrder = async (id: number) => {
  // Primero eliminamos los items asociados
  await orderItemsPrisma.deleteMany({ where: { orderId: id } });
  return await ordersPrisma.delete({ where: { id } });
};
