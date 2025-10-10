import jwt from 'jsonwebtoken';
import { comparePassword, hashPassword } from '../../../utils/bcrypt';
import administradorPrisma from '../../../models/administrador.prisma';

const secretKey = process.env.JWT_SECRET_KEY || 'your-secret-key';

// Crear administrador
export const createAdmin = async (username: string, password: string) => {
  try {
    const adminCount = await administradorPrisma.count();
    if (adminCount > 0) return { status: 403, message: 'Solo se permite un administrador.' };

    const existingAdmin = await administradorPrisma.findUnique({ where: { username } });
    if (existingAdmin) return { status: 409, message: 'El usuario ya existe.' };

    const hashedPassword = await hashPassword(password);
    const admin = await administradorPrisma.create({
      data: { username, password: hashedPassword },
    });

    return { status: 201, admin };
  } catch (error) {
    console.error('Error creando admin:', error);
    return { status: 500, message: 'Problemas con el servidor.' };
  }
};

// Obtener admin por username
export const getAdminByUsername = async (username: string) => {
  try {
    const admin = await administradorPrisma.findUnique({ where: { username } });
    if (!admin) return { status: 404, message: 'Administrador no encontrado.' };
    return { status: 200, admin };
  } catch (error) {
    console.error('Error obteniendo admin:', error);
    return { status: 500, message: 'Error del servidor.' };
  }
};

// Verificar contraseña y generar token
export const verifyAdminPassword = async (username: string, password: string) => {
  try {
    const result = await getAdminByUsername(username);
    const admin = result.admin;

    if (admin && (await comparePassword(password, admin.password))) {
      const token = jwt.sign({ id: admin.id, username: admin.username }, secretKey, { expiresIn: '8h' });
      return { status: 200, admin, token };
    }

    return { status: 401, message: 'Credenciales inválidas.' };
  } catch (error) {
    console.error('Error verificando contraseña admin:', error);
    return { status: 500, message: 'Error del servidor.' };
  }
};

// Actualizar administrador
export const updateAdmin = async (id: number, username?: string, password?: string) => {
  try {
    const data: any = {};
    if (username) data.username = username;
    if (password) data.password = await hashPassword(password);

    const updatedAdmin = await administradorPrisma.update({
      where: { id },
      data,
    });

    return { status: 200, admin: updatedAdmin };
  } catch (error) {
    console.error('Error actualizando admin:', error);
    return { status: 500, message: 'Error del servidor.' };
  }
};

// Eliminar administrador
export const deleteAdmin = async (id: number) => {
  try {
    await administradorPrisma.delete({ where: { id } });
    return { status: 200, message: 'Administrador eliminado correctamente.' };
  } catch (error) {
    console.error('Error eliminando admin:', error);
    return { status: 500, message: 'Error del servidor.' };
  }
};
