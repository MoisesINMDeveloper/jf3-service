import productPrisma from '../../../models/producto.prisma';
import { CreateProductDTO, UpdateProductDTO } from '../../../types/producto.type';
// Crear un producto
export const createProduct = async (data: CreateProductDTO) => {
  try {
    const product = await productPrisma.create({
      data,
    });
    return { status: 201, product };
  } catch (error) {
    console.error("Error creando producto:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const products = await productPrisma.findMany({
      include: {
        category: true,
        aliado: true,
        orderItems: true,
      },
    });
    return { status: 200, products };
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Obtener producto por ID
export const getProductById = async (id: number) => {
  try {
    const product = await productPrisma.findUnique({
      where: { id },
      include: {
        category: true,
        aliado: true,
        orderItems: true,
      },
    });
    if (!product) return { status: 404, message: "Producto no encontrado" };
    return { status: 200, product };
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Actualizar producto
export const updateProduct = async (id: number, data: UpdateProductDTO) => {
  try {
    const product = await productPrisma.update({
      where: { id },
      data,
    });
    return { status: 200, product };
  } catch (error) {
    console.error("Error actualizando producto:", error);
    return { status: 500, message: "Error del servidor" };
  }
};

// Eliminar producto
export const deleteProduct = async (id: number) => {
  try {
    await productPrisma.delete({ where: { id } });
    return { status: 200, message: "Producto eliminado correctamente" };
  } catch (error) {
    console.error("Error eliminando producto:", error);
    return { status: 500, message: "Error del servidor" };
  }
};
