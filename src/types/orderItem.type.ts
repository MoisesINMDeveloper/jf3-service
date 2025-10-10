export interface CreateOrderItemDTO {
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface UpdateOrderItemDTO {
  orderId?: number;
  productId?: number;
  quantity?: number;
  price?: number;
}
