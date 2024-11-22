import { Tproducts } from './products.interface';
import product from './products.model';

const creatproduct = async (paylod: Tproducts) => {
  const result = await product.create(paylod);
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
  const result = await product.find(filter);
  return result;
};
const getSingleproduct = async (id: string) => {
  const result = await product.findById(id);
  return result;
};
const updateproduct = async (id: string, data: Tproducts) => {
  const result = await product.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};
const deletedproduct = async (id: string) => {
  const result = await product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  creatproduct,
  getSingleproduct,
  getAllproduct,
  updateproduct,
  deletedproduct,
};
