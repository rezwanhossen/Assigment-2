import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './modules/products/products.route';
import orderRoute from './modules/order/order.route';
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/products', productRouter);
app.use('/api/orders', orderRoute);
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server was run. Now you work',
  });
});

export default app;
