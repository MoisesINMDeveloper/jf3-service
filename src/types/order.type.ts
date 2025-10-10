export interface CreateOrderDTO {
  clientName: string;
  clientPhone: string;
  aliadoId: number;
  items: {
    productId: number;
    quantity: number;
    price: number;
  }[];
}

export interface UpdateOrderDTO {
  clientName?: string;
  clientPhone?: string;
  status?: string;
}
