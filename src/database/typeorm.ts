import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig();

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.databaseHost,
    port: 5432,
    username: process.env.dbusername,
    password: process.env.dbpass,
    database: process.env.dbName,
    synchronize: false,
    ssl: false,
    entities: ['./dist/database/entities/*{.ts,.js}'],
    migrations: ['./dist/database/migrations/*.{ts,js}'],
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
