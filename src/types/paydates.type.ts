export interface CreatePaydateDTO {
  bank: string;
  code: string;
  cedula: string;
  phone: string;
}

export interface UpdatePaydateDTO {
  bank?: string;
  code?: string;
  cedula?: string;
  phone?: string;
}
