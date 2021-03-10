import { createConnection } from 'typeorm';
import environment from '../../configs/environment';

async function connect() {
  await createConnection({
    type: 'mysql',
    host: environment.db_host,
    port: environment.db_port,
    username: environment.db_user,
    password: environment.db_password,
    database: environment.db_database,
    entities: ['src/repositories/entities/*.ts'],
    migrations: ['src/repositories/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/repositories/migrations/'
    }
  });

  console.log('Status of database: ', 'connected!');
};

export default connect;