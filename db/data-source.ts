import { DataSource,DataSourceOptions } from "typeorm"

export const dataSourceOptions: DataSourceOptions=
{
    type: 'postgres',
      host: 'cloudsql/abiding-operand-437010-s7:us-central1:sqlhobbies',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'Hobbies',
      entities: ['././dist/**/*.entity.js'],
      migrations: ['dist/db/migrations/*.js']

  };

  const dataSource = new DataSource(dataSourceOptions);
  export default dataSource;