"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productConfig = {
    mysql: {
        port: '3306',
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'bang',
        connectionLimit: 10,
    },
};
const localConfig = {
    mysql: {
        port: '3306',
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'bang',
        connectionLimit: 10,
    },
};
const config = process.env.NODE_ENV ? productConfig : localConfig;
exports.default = config;
//# sourceMappingURL=database.js.map