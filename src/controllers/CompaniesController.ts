import { Response, Request } from 'express';
import { getConnection } from 'typeorm';
import jsonwebtoken from 'jsonwebtoken';

import Address from '../repositories/entities/Address';
import Company from '../repositories/entities/Company';
import environment from '../configs/environment';
import Product from '../repositories/entities/Product';

class CompaniesController {
  async create(request: Request, response: Response) {
    try {
      const {
        number,
        district,
        street,
        city,
        state,
        name,
        email,
        password,
        contact
      } = request.body;

      await getConnection().transaction(async transactionalEntityManager => {
        
        // saving address
        const address = new Address();
        address.city = city;
        address.district = district;
        address.street = street;
        address.state = state;
        address.number = number;

        // making changes on database
        const addr = await transactionalEntityManager.save(address);
        
        // new company register
        const company = new Company();
        
        company.name = name;
        company.email = email;
        company.password = password;
        company.contact = contact;
        company.address = addr;
        
        // saving company on database
        await transactionalEntityManager.save(company);
        return response.status(200).json(company);
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error!'
      });
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const company = await Company.findOne({ email, password });
      if (company) {
        return res.status(200).json({
          signed: true,
          token: jsonwebtoken.sign({ id: company.id, permission: 'company' }, environment.jwt_secret)
        });
      } else {
        return res.status(403).json({
          signed: false
        });
      }
    } catch (err) {
      return res.status(400).json({
        signed: false,
        message: err.message || 'Unexpected error'
      });
    }
  }

  async changeAvatar(req: Request, res: Response) {
    try {
      const { id, permission } = req.body.token_data;
      const company = await Company.findOne(id);
      if (company && permission === 'company') {
        company.avatar = req.file.filename;
        await company.save();
        return res.status(200).json(company);
      } else {
        return res.status(400).json({
          message: 'Invalid token | No company exists'
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }

  async listProducts(req: Request, res: Response) {
    try {
      const { id, permission } = req.body.token_data;
      if (permission === 'company') {

        const products = await getConnection()
        .getRepository(Product)
        .createQueryBuilder('products')
        .innerJoin('products.company', 'company')
        .where('products.company_id = :id', { id: id })
        .getMany();

        return res.status(200).json(products);
      } else {
        return res.status(400).json({
          message: 'Invalid token | No company exists'
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: err.message || 'Unexpected Error'
      });
    }
  }
};

export default new CompaniesController();