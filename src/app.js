import express from 'express';
import cors from 'cors';
import routes from './routes.js';

import './database/index.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class App {
    constructor() {
        this.server = express();
        this.cors();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(
            '/filesPhotos',
            express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        );
        this.server.use(
            '/filesignature',
            express.static(path.resolve(__dirname, '..', 'tmp', 'signatures'))
        );
    }

    routes() {
        this.server.use(routes);
    }

    cors() {
        this.server.use(cors());
    }
}
export default new App().server;
