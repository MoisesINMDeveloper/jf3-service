import categoryPrisma from "../../../models/categoria.prisma";
import type { CreateCategoryDTO, UpdateCategoryDTO } from "../../../types/categoria.type";
// Crear categoría
export const createCategory = async (data: CreateCategoryDTO) => {
  try {
    const category = await categoryPrisma.create({
      data,
    });
    return { status: 201, category };
  } catch (error) {
    console.error("Error creando categoría:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener todas las categorías
export const getAllCategories = async () => {
  try {
    const categories = await categoryPrisma.findMany({
      include: { products: true, aliado: true },
    });
    return { status: 200, categories };
  } catch (error) {
    console.error("Error obteniendo categorías:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener categoría por ID
export const getCategoryById = async (id: number) => {
  try {
    const category = await categoryPrisma.findUnique({
      where: { id },
      include: { products: true, aliado: true },
    });
    if (!category) return { status: 404, message: "Categoría no encontrada" };
    return { status: 200, category };
  } catch (error) {
    console.error("Error obteniendo categoría:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Actualizar categoría
export const updateCategory = async (id: number, data: UpdateCategoryDTO) => {
  try {
    const category = await categoryPrisma.update({
      where: { id },
      data,
    });
    return { status: 200, category };
  } catch (error) {
    console.error("Error actualizando categoría:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Eliminar categoría
export const deleteCategory = async (id: number) => {
  try {
    await categoryPrisma.delete({ where: { id } });
    return { status: 200, message: "Categoría eliminada correctamente" };
  } catch (error) {
    console.error("Error eliminando categoría:", error);
    return { status: 500, message: "Error del servidor" };
  }
};
