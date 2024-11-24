import { Torder } from './order.interface';
import Product from '../products/products.model';
import order from './order.model';

const creatOrder = async (paylod: Torder) => {
  const { email, product, quantity } = paylod;
  const foundProduct = await Product.findById(product);
  if (!foundProduct) {
    throw new Error('Product not found');
  }
  if (foundProduct.quantity < quantity) {
    throw new Error('Insufficient stock');
  }
  foundProduct.quantity -= quantity;
  if (foundProduct.quantity === 0) {
    foundProduct.inStock = false;
  }
  await foundProduct.save();
  const totalPrice = foundProduct.price * quantity;
  const orders = await order.create({
    email,
    product,
    quantity,
    totalPrice,
  });

  return orders;
};
const getCalculateTotalRevenue = async () => {
  const result = await order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },
  ]);
  return result[0];
};
export const orderService = {
  creatOrder,
  getCalculateTotalRevenue,
};
