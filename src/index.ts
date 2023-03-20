import express, { Application } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import commpression from "compression";
import helmet from "helmet";
import cors from "cors";
// import multer from 'multer';
import fileUpload from "express-fileupload";

import ClassificationRoute from "./routers/ClassificationRoute";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
        dotenv.config();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.use(fileUpload({
            limits: { fileSize: 50 * 1024 * 1024 },
        }))
        // this.app.use(multer().array())
        this.app.use(commpression())
        this.app.use(helmet())
        this.app.use(cors())
    }

    protected routes(): void {
        this.app.get('/', (req, res) => {
            res.send('Welcome to Hell')
        })
        this.app.use('/classify', ClassificationRoute)
        // this.app.get('*', (req, res) => {
        //     res.status(404).send('Not Found')
        // })
    }
}

const APP = new App().app;
APP.listen(process.env.PORT, () => {
  console.log('Running At : http://localhost:' + process.env.PORT);
});