import express from 'express';
import usersRoutes from './usersRoutes.js';
import orderRoutes from './orderRoutes.js';
import likeRoutes from './likeRoutes.js';
const rootRoutes = express.Router();
rootRoutes.use('/users',usersRoutes);
rootRoutes.use('/orders',orderRoutes);
rootRoutes.use('/like',likeRoutes);
export default rootRoutes;