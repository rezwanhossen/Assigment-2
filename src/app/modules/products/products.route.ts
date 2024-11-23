// import { Router } from 'express';
import express from 'express';
import { productController } from './products.contoller';

const productRouter = express.Router();
productRouter.post('/', productController.creatsproducts);
productRouter.get('/:productId', productController.getSingleproducts);
productRouter.put('/:productId', productController.updateproducts);
productRouter.get('/', productController.getAllproducts);
productRouter.delete('/:productId', productController.deletedproducts);

export default productRouter;
