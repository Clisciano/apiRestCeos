import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';
import path from 'path';

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
