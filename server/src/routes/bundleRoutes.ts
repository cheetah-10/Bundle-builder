import { Router } from 'express';
import { getBundleConfig, getInitialCart, getProducts, getSteps } from '../controllers/bundleController.js';

const router = Router();

router.get('/steps', getSteps);
router.get('/products', getProducts);
router.get('/initial-cart', getInitialCart);

router.get('/bundle-config', getBundleConfig);

export default router;