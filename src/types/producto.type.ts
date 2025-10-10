export interface CreateProductDTO {
  title: string;
  price: number;
  images: string[];
  description: string;
  categoryId: number;
  aliadoId: number;
}

export interface UpdateProductDTO {
  title?: string;
  price?: number;
  images?: string[];
  description?: string;
  categoryId?: number;
  aliadoId?: number;
}
