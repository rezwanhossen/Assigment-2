import { Request, Response } from 'express';
import { orderService } from './order.service';

const creatOrders = async (req: Request, res: Response) => {
  try {
    const paylod = req.body;
    const result = await orderService.creatOrder(paylod);

    res.status(200).json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Order not created  !',
      error: error,
    });
  }
};
const calculrtTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getCalculateTotalRevenue();

    res.status(200).json({
      status: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Revenue not calculated , somthing is worng  !',
      error: error,
    });
  }
};
export const orderController = {
  creatOrders,
  calculrtTotalRevenue,
};
