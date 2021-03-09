interface EnvironmentProps {
  port: number;
  jwt_secret: string;
  db_port: number;
  db_host: string;
  db_user: string;
  db_password: string;
  db_database: string;
};

const environment: EnvironmentProps = {
  port: 3001,
  jwt_secret: 'supersecrect',
  db_host: 'locahost',
  db_port: 3306,
  db_user: 'root',
  db_password: 'super-secret-password',
  db_database: 'simpleauth'
};

export default environment;