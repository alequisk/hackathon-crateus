import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';

import environment from '../configs/environment';

class CostumerController {
  async index(req: Request, res: Response) {
    return res.status(200).json({
      message: 'Hello World'
    });
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      return res.status(200).json({
        signed: true,
        token: jsonwebtoken.sign({ email, password }, environment.jwt_secret)
      });
    } catch (err) {
      return res.status(400).json({
        signed: false,
        message: err.message || 'Unexpected error'
      });
    }
  }
}

export default new CostumerController();