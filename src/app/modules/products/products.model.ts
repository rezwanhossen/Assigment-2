import { Schema, model } from 'mongoose';
import { Tproducts } from './products.interface';

const productSchema = new Schema<Tproducts>(
  {
    name: { type: String, required: [true, 'Name is required'] },
    brand: { type: String, required: [true, 'Beand is required'] },
    price: {
      type: Number,
      required: [true, 'price is required'],
      min: [0, 'Price must be a positive number'],
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message: '{VALUE} is not valid',
      },
    },
    description: { type: String, required: [true, 'description is requird'] },
    quantity: {
      type: Number,
      required: [true, 'quantity must be required'],
      min: [0, 'quantity must be a positive number'],
    },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true, versionKey: false },
);

const product = model<Tproducts>('product', productSchema);
export default product;
