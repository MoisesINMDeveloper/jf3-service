export interface CreatePaymentDTO {
  method: string;        // Ej: "Tarjeta", "Efectivo", "Transferencia"
  amount: number;        // Monto del pago
  status?: string;       // Ej: "pending", "completed"
  orderId: number;       // Relación con la orden
}

export interface UpdatePaymentDTO {
  method?: string;
  amount?: number;
  status?: string;
}
