import express  from 'express';
import { listOrders } from '../controller/orderController.js';

const orderRoutes = express.Router();
orderRoutes.get('/listOrders', listOrders);

export default orderRoutes;