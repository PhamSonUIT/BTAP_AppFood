import express  from 'express';
import { orders } from '../controller/orderController.js';

const orderRoutes = express.Router();
orderRoutes.post('/orders', orders);

export default orderRoutes;
