export interface Torder {
  email: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
