import paymentsPrisma from "../../../models/pagos.prisma";
import type { CreatePaymentDTO, UpdatePaymentDTO } from "../../../types/payments.type";

// Crear pago
export const createPayment = async (data: CreatePaymentDTO) => {
  try {
    const payment = await paymentsPrisma.create({ data });
    return { status: 201, payment };
  } catch (error) {
    console.error("Error creando pago:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener todos los pagos
export const getAllPayments = async () => {
  try {
    const payments = await paymentsPrisma.findMany();
    return { status: 200, payments };
  } catch (error) {
    console.error("Error obteniendo pagos:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener pago por ID
export const getPaymentById = async (id: number) => {
  try {
    const payment = await paymentsPrisma.findUnique({ where: { id } });
    if (!payment) return { status: 404, message: "Pago no encontrado" };
    return { status: 200, payment };
  } catch (error) {
    console.error("Error obteniendo pago:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Actualizar pago
export const updatePayment = async (id: number, data: UpdatePaymentDTO) => {
  try {
    const payment = await paymentsPrisma.update({ where: { id }, data });
    return { status: 200, payment };
  } catch (error) {
    console.error("Error actualizando pago:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Eliminar pago
export const deletePayment = async (id: number) => {
  try {
    await paymentsPrisma.delete({ where: { id } });
    return { status: 200, message: "Pago eliminado correctamente" };
  } catch (error) {
    console.error("Error eliminando pago:", error);
    return { status: 500, message: "Error del servidor" };
  }
};
