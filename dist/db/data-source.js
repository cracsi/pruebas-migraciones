"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    host: 'cloudsql/abiding-operand-437010-s7:us-central1:sqlhobbies',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'Hobbies',
    entities: ['././dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js']
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map