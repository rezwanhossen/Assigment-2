import { Router } from 'express';
import { orderController } from './order.contoller';

const orderRoute = Router();
orderRoute.post('/', orderController.creatOrders);
orderRoute.get('/revenue', orderController.calculrtTotalRevenue);

export default orderRoute;
