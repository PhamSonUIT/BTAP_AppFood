import express from 'express';
import cors from 'cors';
import rootRouters from './src/routes/rootRoutes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use(rootRouters);
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
