import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tfnode from '@tensorflow/tfjs-node-gpu';
import path from 'path';

const model = path.resolve('./models/model.json');

class MobilenetClassification {
  mobilenetModel: mobilenet.MobileNet | undefined;

  async loadModel() {
    if (this.mobilenetModel) {
      return this.mobilenetModel;
    }

    const customModelUrl = model ;
    
    this.mobilenetModel = await mobilenet.load({
      version: 2,
      alpha: 1.0,
      modelUrl: customModelUrl ? `file://${customModelUrl}` : undefined,
    });
    return this.mobilenetModel;
  }

  async classify(imageBuffer: Buffer, topk = 3) {
    if (!this.mobilenetModel) {
      await this.loadModel();
    }

    const tfimage = tfnode.node.decodeImage(imageBuffer) as tfnode.Tensor3D;
    return this.mobilenetModel?.classify(tfimage, topk);
  }
}

export default new MobilenetClassification();