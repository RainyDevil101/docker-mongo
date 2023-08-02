import express from 'express';
import { port, dbConnection } from './db/index.js';
import { createCar, getCars } from './controllers/cars.controllers.js';



const app = express();

dbConnection();

app.get('/', getCars);

app.get('/create', createCar);

app.listen(port, () => console.log(`Listening on port: ${port}`));