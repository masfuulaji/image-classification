"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const ClassificationController_1 = __importDefault(require("../controllers/ClassificationController"));
class ClassificationRoute extends BaseRouter_1.default {
    routes() {
        this.router.get("/x", (req, res) => {
            res.send('allo');
        });
        this.router.post("/", ClassificationController_1.default.classifyImage);
    }
}
exports.default = new ClassificationRoute().router;
