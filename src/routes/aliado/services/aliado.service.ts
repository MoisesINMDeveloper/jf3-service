import aliadoPrisma from '../../../models/aliado.prisma';
import type { CreateAliadoDTO, UpdateAliadoDTO } from '../../../types/aliado.type';

// Crear un aliado
export const createAliado = async (data: CreateAliadoDTO) => {
  try {
    const aliado = await aliadoPrisma.create({
      data,
    });
    return { status: 201, aliado };
  } catch (error) {
    console.error('Error creando aliado:', error);
    return { status: 500, message: 'Error del servidor' };
  }
};

// Obtener todos los aliados
export const getAllAliados = async () => {
  try {
    const aliados = await aliadoPrisma.findMany({
      include: {
        categories: true,
        products: true,
        orders: true,
      },
    });
    return { status: 200, aliados };
  } catch (error) {
    console.error('Error obteniendo aliados:', error);
    return { status: 500, message: 'Error del servidor' };
  }
};

// Obtener aliado por ID
export const getAliadoById = async (id: number) => {
  try {
    const aliado = await aliadoPrisma.findUnique({
      where: { id },
      include: {
        categories: true,
        products: true,
        orders: true,
      },
    });
    if (!aliado) return { status: 404, message: 'Aliado no encontrado' };
    return { status: 200, aliado };
  } catch (error) {
    console.error('Error obteniendo aliado:', error);
    return { status: 500, message: 'Error del servidor' };
  }
};

// Actualizar aliado
export const updateAliado = async (id: number, data: UpdateAliadoDTO) => {
  try {
    const aliado = await aliadoPrisma.update({
      where: { id }, // ✅ Aquí usamos el parámetro 'id' recibido
      data,
    });
    return { status: 200, aliado };
  } catch (error) {
    console.error("Error actualizando aliado:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Eliminar aliado
export const deleteAliado = async (id: number) => {
  try {
    await aliadoPrisma.delete({
      where: { id },
    });
    return { status: 200, message: 'Aliado eliminado correctamente' };
  } catch (error) {
    console.error('Error eliminando aliado:', error);
    return { status: 500, message: 'Error del servidor' };
  }
};
