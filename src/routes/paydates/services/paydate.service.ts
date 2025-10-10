import paydatesPrisma from "../../../models/datos.prisma";
import type { CreatePaydateDTO, UpdatePaydateDTO } from "../../../types/paydates.type";

// Crear paydate
export const createPaydate = async (data: CreatePaydateDTO) => {
  try {
    const paydate = await paydatesPrisma.create({ data });
    return { status: 201, paydate };
  } catch (error) {
    console.error("Error creando paydate:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener todos
export const getAllPaydates = async () => {
  try {
    const paydates = await paydatesPrisma.findMany();
    return { status: 200, paydates };
  } catch (error) {
    console.error("Error obteniendo paydates:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener por ID
export const getPaydateById = async (id: number) => {
  try {
    const paydate = await paydatesPrisma.findUnique({ where: { id } });
    if (!paydate) return { status: 404, message: "Paydate no encontrado" };
    return { status: 200, paydate };
  } catch (error) {
    console.error("Error obteniendo paydate:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Actualizar paydate
export const updatePaydate = async (id: number, data: UpdatePaydateDTO) => {
  try {
    const paydate = await paydatesPrisma.update({
      where: { id },
      data,
    });
    return { status: 200, paydate };
  } catch (error) {
    console.error("Error actualizando paydate:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Eliminar paydate
export const deletePaydate = async (id: number) => {
  try {
    await paydatesPrisma.delete({ where: { id } });
    return { status: 200, message: "Paydate eliminado correctamente" };
  } catch (error) {
    console.error("Error eliminando paydate:", error);
    return { status: 500, message: "Error del servidor" };
  }
};
