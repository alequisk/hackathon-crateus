import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import environment from '../configs/environment';

import Costumer from '../repositories/entities/Costumer';

class CostumerController {
  async index(req: Request, res: Response) {
    return res.status(200).json({
      message: 'Hello World'
    });
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      
      // verificação banco de dados

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

  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const costumer =  new Costumer();
      costumer.name = name;
      costumer.email = email;
      costumer.password = password
      await costumer.save();

      return res.status(200).json(costumer);
    } catch (err) {
      /*
        200 - OK
        400 - Internal Error
      */
      return res.status(400).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }
}

export default new CostumerController();