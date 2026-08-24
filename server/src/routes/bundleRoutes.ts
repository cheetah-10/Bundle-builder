import { Router } from 'express';
import { getBundleConfig, getProducts, getSteps } from '../controllers/bundleController.js';

const router = Router();

router.get('/steps', getSteps);
router.get('/products', getProducts);
router.get('/bundle-config', getBundleConfig);

export default router;