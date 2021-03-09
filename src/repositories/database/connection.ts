import { createConnection } from 'typeorm';
import path from 'path';
import environment from '../../configs/environment';

async function connect() {
  try {
    const conn = await createConnection({
      type: 'mysql',
      host: environment.db_host,
      port: environment.db_port,
      username: environment.db_user,
      password: environment.db_password,
      database: environment.db_database,
      entities: ['../entities/*.ts']

    });
    console.log('connected!');
    return conn;
  } catch (err) {
    throw new Error(`Connection isn't work: ${err.message}`);
  }
}

export default connect();