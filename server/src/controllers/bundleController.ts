import { bundleSteps, bundleProducts } from './../data/bundleData.js';
import { type Request, type Response } from 'express';


export const getSteps = (_req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true, data: bundleSteps });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch steps'
    });
  }
};

export const getProducts = (_req: Request, res: Response) => {
  try {
    res.status(200).json({ success: true, data: bundleProducts });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch products bundle'
    });
  }
};

// GET /api/bundle-config
export const getBundleConfig = (_req: Request, res: Response) => {
  try {
    return res.status(200).json({
      success: true,
      data: {
        steps: bundleSteps,
        products: bundleProducts
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch bundle configuration'
    });
  }
};