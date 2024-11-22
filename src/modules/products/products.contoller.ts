import { Request, Response } from 'express';
import { productService } from './products.service';

const creatsproducts = async (req: Request, res: Response) => {
  try {
    const paylod = req.body;
    const result = await productService.creatproduct(paylod);
    res.status(200).json({
      status: true,
      message: 'Bicycle created successfully !',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'product is not created !',
      error: error,
    });
  }
};
const getAllproducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    const result = await productService.getAllproduct(searchTerm as string);
    if (result.length === 0) {
      return res.status(404).json({
        status: false,
        message: 'Data not available',
        data: [],
      });
    }
    res.status(200).json({
      status: true,
      message: 'get all Bicycle successfully !',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'get data is failed !',
      error: error,
    });
  }
};
const getSingleproducts = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleproduct(productId);
    res.status(200).json({
      status: true,
      message: 'single Bicycle get successfully !',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'single Bicycle get failed  !',
      error: error,
    });
  }
};
const updateproducts = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const result = await productService.updateproduct(productId, data);
    res.status(200).json({
      status: true,
      message: 'update Bicycle data successfully !',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'update Bicycle  failed  !',
      error: error,
    });
  }
};
const deletedproducts = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deletedproduct(productId);
    res.status(200).json({
      status: true,
      message: 'deleted data successfully !',
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'deleted Bicycle  failed  !',
      error: error,
    });
  }
};
export const productController = {
  creatsproducts,
  getAllproducts,
  getSingleproducts,
  updateproducts,
  deletedproducts,
};
