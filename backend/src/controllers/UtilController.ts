import { Request, Response } from 'express';

class UtilController {
  async saveAvatar(request: Request, response: Response) {
    try {
      const urlAvatar = request.file.filename;
      return response.status(200).json({
        urlAvatar
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }
  }
}

export default new UtilController();