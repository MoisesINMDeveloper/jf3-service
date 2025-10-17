import deliveryOptions from "../../../models/entrega.prisma";
import type { CreateDeliveryOptionDTO, UpdateDeliveryOptionDTO } from "../../../types/deliveryOptions.type";

// Crear opción de entrega
export const createDeliveryOption = async (data: CreateDeliveryOptionDTO) => {
  try {
    const option = await deliveryOptions.create({
      data: {
        name: data.name,
        fee: data.fee,
        aliadoId: data.aliadoId,
      },
    });

    return { status: 201, option };
  } catch (error) {
    console.error("Error creando opción de entrega:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener todas las opciones
export const getAllDeliveryOptions = async () => {
  try {
    const options = await deliveryOptions.findMany();
    return { status: 200, options };
  } catch (error) {
    console.error("Error obteniendo opciones de entrega:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener por ID
export const getDeliveryOptionById = async (id: number) => {
  try {
    const option = await deliveryOptions.findUnique({
      where: { id },
    });

    if (!option) return { status: 404, message: "Opción no encontrada" };
    return { status: 200, option };
  } catch (error) {
    console.error("Error obteniendo opción de entrega:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Actualizar opción
export const updateDeliveryOption = async (id: number, data: UpdateDeliveryOptionDTO) => {
  try {
    const option = await deliveryOptions.update({
      where: { id },
      data,
    });
    return { status: 200, option };
  } catch (error) {
    console.error("Error actualizando opción de entrega:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Eliminar opción
export const deleteDeliveryOption = async (id: number) => {
  try {
    await deliveryOptions.delete({ where: { id } });
    return { status: 200, message: "Opción de entrega eliminada correctamente" };
  } catch (error) {
    console.error("Error eliminando opción de entrega:", error);
    return { status: 500, message: "Error del servidor" };
  }
};
