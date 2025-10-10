export interface CreateDeliveryOptionDTO {
  name: string;
  fee: number;
}

export interface UpdateDeliveryOptionDTO {
  name?: string;
  fee?: number;
}
