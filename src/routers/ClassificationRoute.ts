import BaseRouter from "./base/BaseRouter";

import ClassificationController from "../controllers/ClassificationController";

class ClassificationRoute extends BaseRouter {
    public routes(): void {
        this.router.post("/test",(req, res) => {
            res.send(req.files)
        })
        this.router.post("/", ClassificationController.classifyImage);
    }
}

export default new ClassificationRoute().router;