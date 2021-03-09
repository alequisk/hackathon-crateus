import 'reflect-metadata';

import express, { json } from 'express'
import cors from 'cors';
import routes from './routes';

import environment from './configs/environment';

const app = express();

app.use(json());
app.use(cors());
app.use(routes);

app.listen(environment.port, () => {
  console.log(`Server is running on http://localhost:${environment.port}`);
});