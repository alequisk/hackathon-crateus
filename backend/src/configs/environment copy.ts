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
  port: 0,
  jwt_secret: '',
  db_host: '',
  db_port: 0,
  db_user: '',
  db_password: '',
  db_database: ''
};

export default environment;