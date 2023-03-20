"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const ClassificationRoute_1 = __importDefault(require("./routers/ClassificationRoute"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
        dotenv_1.default.config();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.send('Welcome to Hell');
        });
        this.app.use('/classify', ClassificationRoute_1.default);
        // this.app.get('*', (req, res) => {
        //     res.status(404).send('Not Found')
        // })
    }
}
const APP = new App().app;
APP.listen(process.env.PORT, () => {
    console.log('Running At : http://localhost:' + process.env.PORT);
});
