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
  db_host: '127.0.0.1',
  db_port: 3306,
  db_user: 'root',
  db_password: 'Kjr_9998-rotts',
  db_database: 'simpleauth'
};

export default environment;