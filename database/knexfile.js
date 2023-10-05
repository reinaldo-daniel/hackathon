import databaseConfig from "../src/config/dbConfig.js";

const {
    mysqlHost,
    mysqlPort,
    mysqlUser,
    mysqlPass,
    mysqlDbname,
} = databaseConfig;

const knexConfig = {
    client: "mysql2",
    debug: true,
    connection: {
        host: mysqlHost,
        port: mysqlPort,
        user: mysqlUser,
        password: mysqlPass,
        database: mysqlDbname,
    },
    migrations: {
        tableName: "knex_migrations",
        directory: "./migrations",
        stub: "./migration.stub",
    },
    seeds: {
        directory: "./seeds",
    },
};

export default knexConfig;
