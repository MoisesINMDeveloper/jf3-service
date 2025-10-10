// src/types/aliado.types.ts
import aliadoPrisma from "../models/aliado.prisma";
// Tipo para crear un aliado
export type CreateAliadoDTO = {
  name: string;
  image: string;
};

// Tipo para actualizar un aliado
export type UpdateAliadoDTO = Partial<aliadoPrisma>;
