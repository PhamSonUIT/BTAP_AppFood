import express from 'express';

import { listUsers } from '../controller/userController.js';

const usersRoutes = express.Router();
usersRoutes.get('/listUsers', listUsers);
export default usersRoutes;