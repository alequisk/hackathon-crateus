import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { getConnection } from 'typeorm';
import environment from '../configs/environment';
import Address from '../repositories/entities/Address';

import Costumer from '../repositories/entities/Costumer';

class CostumerController {
  async index(req: Request, res: Response) {
    return res.status(200).json({
      message: 'Hello World'
    });
  }

  async fetch(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const costumer = await Costumer.findOneOrFail({ relations: ['address'], where: { id } });
      return res.status(200).json(costumer);
    } catch (err) {
      return res.status(500).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }

  async fetchAll(req: Request, res: Response) {
    try {
      const [costumers, total] = await Costumer.findAndCount();
      return res.status(200).json({
        costumers,
        total
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const costumer = await Costumer.findOne({ email, password });

      if (costumer) {
        return res.status(200).json({
          signed: true,
          token: jsonwebtoken.sign({ id: costumer.id, permission: 'costumer' }, environment.jwt_secret)
        });
      }

      return res.status(403).json({
        signed: false,
        message: 'Invalid credentials.'
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
      const {
        name,
        email,
        password,
        number,
        district,
        street,
        city,
        state,
      } = req.body;

      await getConnection().transaction(async transactionalEntityManager => {
        const address = new Address();
        address.city = city;
        address.street = street;
        address.number = number;
        address.state = state;
        address.district = district;

        await transactionalEntityManager.save(address);        

        const costumer =  new Costumer();
        costumer.name = name;
        costumer.email = email;
        costumer.password = password;
        costumer.address = address;

        await transactionalEntityManager.save(costumer);
        return res.status(200).json(costumer);
      });
      
    } catch (err) {
      /*
        200 - OK
        400 - Internal Error
      */
      return res.status(500).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }

  async changeAvatar(req: Request, res: Response) {
    try {
      const { id, permission } = req.body.token_data;
      const costumer = await Costumer.findOne(id);
      if (costumer && permission === 'costumer') {
        costumer.avatar = req.file.filename;
        await costumer.save();
        return res.status(200).json(costumer);
      } else {
        return res.status(400).json({
          message: 'Invalid token | No costumer exists'
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }
}

export default new CostumerController();