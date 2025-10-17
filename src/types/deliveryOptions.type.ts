export interface CreateDeliveryOptionDTO {
  name: string;
  fee: number;
  aliadoId: number; // 👈 ahora es obligatorio
}

export interface UpdateDeliveryOptionDTO {
  name?: string;
  fee?: number;
  aliadoId?: number;
}
