import { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken'; 
import environment from '../../configs/environment';

class AuthMiddleware {
  async validate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const [_, token] = authorization.split(' ');

    try { 
      const token_data = jsonwebtoken.verify(token, environment.jwt_secret);
      req.body = {...req.body, token_data};
      next();
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }
}


export default new AuthMiddleware();