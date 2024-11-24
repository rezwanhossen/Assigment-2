import { Schema, model } from 'mongoose';
import { Torder } from './order.interface';

const orserSchema = new Schema<Torder>(
  {
    email: {
      type: String,
      required: [true, 'email is requried, pleace give a email'],
    },
    product: {
      type: String,
      required: [true, 'Product id must be required'],
    },
    quantity: { type: Number, required: [true, 'qurntity is required'] },
    totalPrice: { type: Number, required: [true, 'total price is required'] },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const order = model<Torder>('order', orserSchema);
export default order;
