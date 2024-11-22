import { Router } from 'express';
import { productController } from './products.contoller';

const productRouter = Router();
productRouter.post('/', productController.creatsproducts);
productRouter.get('/:productId', productController.getSingleproducts);
productRouter.put('/:productId', productController.updateproducts);
productRouter.delete('/:productId', productController.deletedproducts);
productRouter.get('/', productController.getAllproducts);
export default productRouter;
