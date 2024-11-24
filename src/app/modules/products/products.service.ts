import { Tproducts } from './products.interface';
import Product from './products.model';

const creatproduct = async (paylod: Tproducts) => {
  const result = await Product.create(paylod);
  return result;
};
const getAllproduct = async (searchTerm: string) => {
  const filter = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { type: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};
  const result = await Product.find(filter);
  return result;
};
const getSingleproduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateproduct = async (id: string, data: Tproducts) => {
  const result = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};
const deletedproduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  creatproduct,
  getSingleproduct,
  getAllproduct,
  updateproduct,
  deletedproduct,
};
