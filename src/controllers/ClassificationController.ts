import { Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import ClassificationRepository from '../repository/ClassificationRepository';

class Controller {
  async classifyImage(req: Request, res: Response) {
    const imageObject = req.files?.image as UploadedFile;
    if (!imageObject) {
       return res.send('No Image');
    }
    res.json(await ClassificationRepository.classifyImageFile(imageObject));
  }
}
export default new Controller();