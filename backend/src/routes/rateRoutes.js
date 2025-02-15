import express from 'express';
import { createRate } from '../controller/rateController.js';
import { getRateByResId } from '../controller/rateController.js';
const rateRoutes = express.Router();

rateRoutes.post('/rateRestaurants', createRate);
rateRoutes.get('/getRateByResId/:res_id', getRateByResId);
export default rateRoutes;