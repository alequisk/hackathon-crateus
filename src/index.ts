import 'reflect-metadata';

import express, { json } from 'express'
import cors from 'cors';
import connection from './repositories/database/connection';
import routes from './routes';

import environment from './configs/environment';

connection().then(() => {
  const app = express();
  app.use(json());
  app.use(cors());
  app.use(routes);

  app.listen(environment.port, () => {
    console.log(`Server is running on http://${environment.db_host}:${environment.port}`);
  });
}).catch((err) => {
  throw new Error(`Fatal error on backend: ${err.message}`)
});